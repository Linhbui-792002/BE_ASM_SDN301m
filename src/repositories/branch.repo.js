import NotifycationModel from '../models/notifycation.model.js';
import BranchModel from '../models/branch.model.js'
import UserModel from '../models/user.model.js';
import { getInfoData } from '../utils/index.js';
import createHttpError from 'http-errors';

const getBranch = async ({ page = 1, limit = 10 }) => {
  try {

    const skips = limit * (page - 1);
    const result = await BranchModel.find({})
    .sort({createdAt: -1})
    .skip(skips).limit(limit);
    const total = await BranchModel.countDocuments();
    const totalPages = Math.ceil(total / limit);

   return {
      data:result,
      pageIndex:page,
      pageSize:limit,
      totalRecords:total,
      totalPages:totalPages
    };
  } catch (error) {
    throw new Error(error.toString());
  }
};

const getBranchById = async ({id}) => {
  try {

    const result = await BranchModel.findOne({_id:id})
    if (!result) {
      throw createHttpError.NotFound(`Branch ${_id} not existing.`)
    }
   return result
  } catch (error) {
    throw new Error(error.toString());
  }
};

const addBranch = async ({ name, address, createdBy }) => {
  try {

    const branch = await BranchModel.create({ name, address, createdBy })
    return branch;
  } catch (error) {
    throw new Error(error.toString());
  }
};


const editBranch = async ({ _id,name, address }) => {
    try {

      const updateBranch = await BranchModel.findOneAndUpdate(
        { _id: _id },
        { name, address},
        { new: true }
      );
      if (!updateBranch) {
        throw createHttpError.NotFound(`Branch ${_id} not existing.`)
      }
      return updateBranch._doc;
    } catch (error) {
      throw new Error(error.toString());
    }
  };


  const deleteBranch = async ({ id}) => {
    try {

      const updateBranch = await BranchModel.findOneAndDelete(
        { _id: id },
      );
      if (!updateBranch) {
        throw createHttpError.NotFound(`Branch ${id} not existing.`)
      }
      return updateBranch._doc;
    } catch (error) {
      throw new Error(error.toString());
    }
  };


export default {
    addBranch,
    getBranch,
    getBranchById,
    editBranch,
    deleteBranch
};
