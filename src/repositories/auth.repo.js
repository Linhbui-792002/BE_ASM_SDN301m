import AccountModel from '../models/account.model.js';

const signIn = async ({ email, password }) => {
  try {
    const user = await AccountModel.find({ email: email }).exec();
    console.log(user, 'user');
    return user;
  } catch (error) {
    throw new Error(error.toString());
  }
};

export default {
  signIn,
};
