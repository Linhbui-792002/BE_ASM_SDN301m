import { AuthRepo } from '../repositories/index.js';


const getAllListUser = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const result = await AuthRepo.getListUser({ page, limit });
    res.status(200).json({
      statusCode: 200,
      message: 'get all dorm success',
      data: result,
    });
  } catch (error) {
    next(error)
  }
}

const signUpController = async (req, res, next) => {
  try {
    const { email,
      password,
      role,
      firstName,
      lastName,
      gender,
      phoneNumber,
      image } = req.body


    const result = await AuthRepo.signUp({
      email,
      password,
      role,
      gender,
      firstName,
      lastName,
      phoneNumber,
      image
    })
    res.status(200).json({
      statusCode: 200,
      message: 'create account success',
      data: result,
    });
  } catch (error) {
    next(error)
  }

};

const signInController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(req.body, 'req.body')
    const result = await AuthRepo.signIn({ email, password });
    return res.status(200).json({
      statusCode: 200,
      message: 'login success',
      data: result,
    });
  } catch (error) {
    next(error)
  }
};

const refreshTokenController = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    const result = await AuthRepo.refreshAccessToken(refreshToken);
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
}

export default {
  signUpController,
  signInController,
  refreshTokenController,
  getAllListUser
};
