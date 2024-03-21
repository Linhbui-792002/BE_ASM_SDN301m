import createHttpError from 'http-errors';
import AccountModel from '../models/account.model.js';
import UserModel from '../models/user.model.js';
import bcrypt from 'bcrypt'
import { createAccessToken, createRefreshToken, reAccessToken } from '../middlewares/auth.js';


const getListUser = async ({ page = 1, limit = 10 }) => {
  try {
    const skips = limit * (page - 1);
    const result = await AccountModel.find({}).populate("user")
      .sort({ name: 1 })
      .skip(skips).limit(limit);
    const total = await AccountModel.countDocuments();
    const totalPages = Math.ceil(total / limit);

    return {
      data: result,
      pageIndex: page,
      pageSize: limit,
      totalRecords: total,
      totalPages: totalPages
    };
  } catch (error) {
    throw new Error(error.toString());
  }
};

const signIn = async ({ email, password }) => {
  try {
    if (!email || !password) throw createHttpError.BadRequest('email password erorr');

    const existAccount = await AccountModel.findOne({ email: email })
      .populate('user')
      .exec();
    if (!existAccount) {
      throw new createHttpError.NotFound('User not registered');
    }

    const isMatchPassword = await bcrypt.compare(String(password), existAccount.password);
    if (!isMatchPassword) {
      throw new createHttpError.Unauthorized('Invalid email or password');
    }
    const userInfo = {
      _id: existAccount.user._id,
      firstName: existAccount.user.firstName,
      lastName: existAccount.user.lastName,
      role: existAccount.role
    }


    const accessToken = await createAccessToken(userInfo)
    const refreshToken = await createRefreshToken(userInfo)
    return { user: userInfo, accessToken, refreshToken };
  } catch (error) {
    throw new Error(error.toString());
  }
};

const signUp = async ({ email, password, gender, role, firstName, lastName, phoneNumber, image = '/public/image.avatar.jpg' }) => {
  try {

    const existsEmail = await AccountModel.findOne({ email: email });
    if (existsEmail) {
      throw createHttpError.Conflict(`Email ${email} already exists`);
    }

    const hashedPassword = await bcrypt.hash(String(password), 10);
    const user = await UserModel.create({ firstName, gender, lastName, phoneNumber, image });

    if (!user) {
      throw createHttpError.BadRequest(`Failed to create user`);
    }

    const saveAccount = await AccountModel.create({ user, email, password: hashedPassword, role });

    return saveAccount;
  } catch (error) {
    throw error;
  }
}


const refreshAccessToken = async (refreshToken) => {
  try {
    if (!refreshToken) {
      throw createHttpError.BadRequest('Missing refreshToken');
    }
    const accessToken = await reAccessToken(refreshToken)

    return { accessToken, refreshToken }

  } catch (error) {
    throw error;
  }
};

export default {
  signIn,
  signUp,
  refreshAccessToken,
  getListUser
};
