import jwt from "jsonwebtoken";
import AccountModel from '../models/account.model.js';
import UserModel from '../models/user.model.js';
import createHttpError from "http-errors";

const createAccessToken = async (user) => {
  const { _id, firstName, lastName, role } = user;

  const payload = {
    sub: _id,
    firstName: firstName,
    lastName: lastName,
    role: role
  };
  const token = await jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    algorithm: "HS512",
    expiresIn: '3h',
  });

  return token
};

const createRefreshToken = async (user) => {
  const { _id, firstName, lastName, role } = user;

  const payload = {
    sub: _id,
    firstName: firstName,
    lastName: lastName,
    role: role
  };
  const token = await jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    algorithm: "HS512",
    expiresIn: '1d',
  });

  return token
};

const reAccessToken = async (refreshToken) => {
  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

    if (!decoded || !decoded.sub) {
      throw createHttpError.Unauthorized('Invalid refreshToken');
    }

    const accessToken = jwt.sign({ sub: decoded.sub }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });

    return accessToken;
  } catch (error) {
    throw error;
  }
};

const checkToken = async (req, res, next) => {
  const { authorization } = req.headers;
  const headerToken = authorization && authorization.startsWith("Bearer ");

  if (!headerToken) {
    return next(createHttpError.Unauthorized("Invalid session. Please login !"))
  }

  const token = authorization.split(" ")[1];

  await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decoder) => {
    if (err) {
      const message = err.name === 'JsonWebTokenError' ? 'Unauthorized' : err.message;
      return next(createHttpError.Unauthorized(message));
    }

    const userInfo = await UserModel
      .findById(decoder.sub)
      .select("_id firstName lastName");
    console.log(userInfo);

    if (!userInfo) {
      throw createHttpError.Unauthorized("Invalid token !");
    }

    req.payload = userInfo;
    next();
  });
};

export {
  createAccessToken,
  checkToken,
  createRefreshToken,
  reAccessToken
};
