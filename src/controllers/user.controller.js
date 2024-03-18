import JWT from 'jsonwebtoken';
import { AuthRepo } from '../repositories/index.js';

const endcodeToken = (userId) => {
  return new Promise((resolve, reject) => {
    const payload = {};
    const secret = process.env.ACCESS_TOKEN_SECRET;
    const options = {
      expiresIn: '3h',
      issuer: 'localhost:9999',
      audience: userId,
    };

    JWT.sign(payload, secret, options, (err, token) => {
      if (err) {
        console.log(err.message);
        // reject(err)
        reject(createError.InternalServerError());
      }
      resolve(token);
    });
  });
};

const signUpController = async (req, res, next) => {};

const signInController = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body,'req.body')
  const user = await AuthRepo.signIn({ email, password });
  return res.status(200).json(user)
};

export default {
  signUpController,
  signInController,
};
