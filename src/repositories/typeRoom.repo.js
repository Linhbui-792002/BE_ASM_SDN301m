import RoomTypeModel from '../models/roomType.model.js';
import SupportEWModel from '../models/supportEW.model.js';
import createHttpError from 'http-errors';
import { getInfoData } from '../utils/index.js';


const getTypeRoom = async ({ page = 1, limit = 10 }) => {
  try {

    const skips = limit * (page - 1);
    const result = await RoomTypeModel.find({})
      .populate('supportEw')
      .sort({ createdAt: -1 })
      .skip(skips).limit(limit);

    const total = await RoomTypeModel.countDocuments();
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

const getTypeRoomById = async ({ id }) => {
  try {

    const roomType = await RoomTypeModel.findOne({ _id: id }).populate('supportEw')
    if (!roomType) {
      throw createHttpError.NotFound(`TypeRoom ${_id} not existing.`)
    }

    const infoRoomType = getInfoData(['_id','name','bedNum','price'],roomType)
    const infoSpEW = getInfoData([{'_id':'supportEWId'},'numWater','numElectronic'] ,roomType.supportEw)
    return {...infoRoomType,...infoSpEW}
  } catch (error) {
    throw new Error(error.toString());
  }
};

const addTypeRoom = async ({ name, bedNum, price, numWater, numElectronic }) => {
  try {

    const suportEW = await SupportEWModel.create({ numWater, numElectronic })
    console.log(suportEW, 'suportEW')
    if (!suportEW) throw createHttpError[500](`create suport ew error`)

    const typeRoom = await RoomTypeModel.create({ name, bedNum, price, supportEw: suportEW._id })

    return typeRoom;
  } catch (error) {
    throw new Error(error.toString());
  }
};


const editOneTypeRoom = async ({ _id,name, bedNum, price,numWater, numElectronic, supportEWId}) => {
    try {
      const updateEw = await SupportEWModel.findOneAndUpdate(
        {_id:supportEWId},
        {numWater, numElectronic},
        { new: true }
      )

      if (!updateEw) {
        throw createHttpError.NotFound(`Support EW ${supportEWId} not existing.`)
      }

      const updateTypeRoom = await RoomTypeModel.findOneAndUpdate(
        { _id: _id },
        { name, bedNum, price},
        { new: true }
      );

      if (!updateTypeRoom) {
        throw createHttpError.NotFound(`TypeRoom ${_id} not existing.`)
      }

      return updateTypeRoom._doc;
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
//         throw createHttpError.NotFound(`TypeRoom ${id} not existing.`)
//       }
//       return updateBranch._doc;
//     } catch (error) {
//       throw new Error(error.toString());
//     }
//   };


export default {
  addTypeRoom,
  getTypeRoom,
  getTypeRoomById,
  editOneTypeRoom
  // deleteBranch
};
