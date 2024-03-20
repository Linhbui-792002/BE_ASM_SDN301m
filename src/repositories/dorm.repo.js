import BranchModel from '../models/branch.model.js'
import DomModel from '../models/dormitory.model.js';
import UserModel from '../models/user.model.js';
import { getInfoData } from '../utils/index.js';
import createHttpError from 'http-errors';

const getDorm = async ({ page = 1, limit = 10 }) => {
  try {
    const skips = limit * (page - 1);
    const result = await DomModel.find({})
    .sort({name: 1})
    .skip(skips).limit(limit);
    const total = await DomModel.countDocuments();
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

const getDormById = async ({id}) => {
  try {

    const result = await DomModel.findOne({_id:id})
    if (!result) {
      throw createHttpError.NotFound(`Dorm ${_id} not existing.`)
    }
   return result
  } catch (error) {
    throw new Error(error.toString());
  }
};

const addDorm = async ({ name, numberFloor }) => {
  try {
    const branchId = "65f6fc6a099cd4d9192e5738";
    const resBrach = await BranchModel.findOne({_id:branchId}).exec()

    if (!resBrach) {
        throw createHttpError.NotFound(`Branch ${_id} not existing.`)
      }
    const branch = {
        _id: resBrach._id,
        name:resBrach.name
    }

    const dorm = await DomModel.create({ name, numberFloor, branch })
    return dorm;
  } catch (error) {
    throw new Error(error.toString());
  }
};


const editDorm = async ({ _id,name, numberFloor }) => {
    try {

      const updateDorm = await DomModel.findOneAndUpdate(
        { _id: _id },
        { name, numberFloor},
        { new: true }
      );
      if (!updateDorm) {
        throw createHttpError.NotFound(`Dorm ${_id} not existing.`)
      }
      return updateDorm._doc;
    } catch (error) {
      throw new Error(error.toString());
    }
  };


//   const deleteBranch = async ({ id}) => {
//     try {

//       const updateBranch = await BranchModel.findOneAndDelete(
//         { _id: id },
//       );
//       if (!updateBranch) {
//         throw createHttpError.NotFound(`Branch ${id} not existing.`)
//       }
//       return updateBranch._doc;
//     } catch (error) {
//       throw new Error(error.toString());
//     }
//   };


export default {
    addDorm,
    getDorm,
    editDorm,
    getDormById
    // getBranch,
    // getBranchById,
    // editBranch,
    // deleteBranch
};
