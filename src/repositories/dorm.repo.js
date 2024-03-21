import BranchModel from '../models/branch.model.js'
import DomModel from '../models/dormitory.model.js';
import UserModel from '../models/user.model.js';
import { getInfoData } from '../utils/index.js';
import createHttpError from 'http-errors';
import DormFloorModel from '../models/dormFloor.model.js';
import RoomModel from '../models/room.model.js';
import BedModel from '../models/bed.model.js';

const getDorm = async ({ page = 1, limit = 10 }) => {
  try {
    const skips = limit * (page - 1);
    const result = await DomModel.find({})
      .sort({ name: 1 })
      .skip(skips).limit(limit);
    const total = await DomModel.countDocuments();
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

const getDormById = async ({ id }) => {
  try {

    const result = await DomModel.findOne({ _id: id })
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
    const resBrach = await BranchModel.findOne({ _id: branchId }).exec()

    if (!resBrach) {
      throw createHttpError.NotFound(`Branch ${_id} not existing.`)
    }
    const branch = {
      _id: resBrach._id,
      name: resBrach.name
    }

    const dorm = await DomModel.create({ name, numberFloor, branch })
    return dorm;
  } catch (error) {
    throw new Error(error.toString());
  }
};


const editDorm = async ({ _id, name, numberFloor }) => {
  try {

    const updateDorm = await DomModel.findOneAndUpdate(
      { _id: _id },
      { name, numberFloor },
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

const getDormBooking = async ({ roomTypeID }) => {

  let filter = {}
  if (roomTypeID) {
    filter['roomType'] = roomTypeID;
  }
  const rooms = await RoomModel.find(filter)
    .populate('beds')
    .populate('roomType')
    .populate('dormFloor')
    .populate('dormitory')
    .sort({ 'dormitory': 1 })

  if (!rooms) {
    throw createHttpError.NotFound(`roomTypeID ${roomTypeID} not found.`)
  }
  let transformedData = [];

  for (const room of rooms) {
    let transformedRoom = {
      dormId: room.dormitory ? room.dormitory._id : null,
      dormName: room.dormitory ? room.dormitory.name : null,
      DormFloor: [
        {
          floorId: room.dormFloor ? room.dormFloor._id : null,
          floorNum: room.dormFloor ? room.dormFloor.floorNumber : null,
          room: [
            {
              roomId: room._id,
              roomName: room.name,
              gender: room.gender,
              roomTypeID: room.roomType ? room.roomType._id : null,
              price: room.roomType ? room.roomType.price : null,
              bed: room.beds.map((bed) => ({
                bedId: bed._id,
                status: bed.status,
              })),
            },
          ],
        },
      ],
    };

    transformedData.push(transformedRoom);
  }

  return transformedData;
}


export default {
  addDorm,
  getDorm,
  editDorm,
  getDormById,
  getDormBooking
};
