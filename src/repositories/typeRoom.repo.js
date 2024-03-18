import RoomTypeModel from '../models/branch.model.js'
import SupportEWModel from '../models/supportEW.model.js';
import createHttpError from 'http-errors';


// const getTypeRoom = async ({ page = 1, limit = 10 }) => {
//   try {

//     const skips = limit * (page - 1);
//     const result = await BranchModel.find({})
//     .sort({createdAt: -1})
//     .skip(skips).limit(limit);
//     const total = await BranchModel.countDocuments();
//     const totalPages = Math.ceil(total / limit);

//    return {
//       data:result,
//       pageIndex:page,
//       pageSize:limit,
//       totalRecords:total,
//       totalPages:totalPages
//     };
//   } catch (error) {
//     throw new Error(error.toString());
//   }
// };

// const getBranchById = async ({id}) => {
//   try {

//     const result = await BranchModel.findOne({_id:id})
//     if (!result) {
//       throw createHttpError.NotFound(`TypeRoom ${_id} not existing.`)
//     }
//    return result
//   } catch (error) {
//     throw new Error(error.toString());
//   }
// };

const addTypeRoom = async ({ name, bedNum, price,numWater,numElectronic }) => {
  try {

    const suportEW = await SupportEWModel.create({numWater,numElectronic})

    if(!suportEW) throw createHttpError[500](`create suport ew error`)

    const typeRoom = await RoomTypeModel.create({  name, bedNum, price, supportEw:suportEW._id})

    return typeRoom;
    
  } catch (error) {
    throw new Error(error.toString());
  }
};


// const editBranch = async ({ _id,name, address }) => {
//     try {

//       const updateBranch = await BranchModel.findOneAndUpdate(
//         { _id: _id },
//         { name, address},
//         { new: true }
//       );
//       if (!updateBranch) {
//         throw createHttpError.NotFound(`TypeRoom ${_id} not existing.`)
//       }
//       return updateBranch._doc;
//     } catch (error) {
//       throw new Error(error.toString());
//     }
//   };


//   const deleteBranch = async ({ id}) => {
//     try {

//       const updateBranch = await BranchModel.findOneAndDelete(
//         { _id: id },
//       );
//       if (!updateBranch) {
//         throw createHttpError.NotFound(`TypeRoom ${id} not existing.`)
//       }
//       return updateBranch._doc;
//     } catch (error) {
//       throw new Error(error.toString());
//     }
//   };


export default {
    addTypeRoom,
    // getBranch,
    // getBranchById,
    // editBranch,
    // deleteBranch
};
