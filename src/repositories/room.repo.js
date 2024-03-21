import DomModel from '../models/dormitory.model.js';
import BedModel from '../models/bed.model.js';
import UserModel from '../models/user.model.js';
import RoomTypeModel from '../models/roomType.model.js';
import { getInfoData } from '../utils/index.js';
import createHttpError from 'http-errors';
import RoomModel from '../models/room.model.js';

const getRoomByDormFloorId = async ({ dormFloorId }) => {
    try {
        const result = await RoomModel.find({ dormFloor: dormFloorId })
            .sort({ roomNumber: 1 })

        return {
            data: result,
        };
    } catch (error) {
        throw new Error(error.toString());
    }
};

const addRoom = async ({ name, roomNumber, gender, roomType, dormitory, dormFloor }) => {
    try {

        const existRoomType = await RoomTypeModel.findOne({ _id: roomType }).exec();
        if (!existRoomType) {
            throw createHttpError.NotFound(`room type ${roomType} not exist.`)
        }
        const existRoomNumber = await RoomModel.findOne({ dormFloor: dormFloor, roomNumber: roomNumber }).exec()

        if (existRoomNumber) {
            throw createHttpError.Conflict(`room number ${roomNumber} existed.`)
        }

        const room = await RoomModel.create({ name, roomNumber, gender, roomType, dormitory, dormFloor })

        const beds = [];
        for (let i = 1; i <= existRoomType.bedNum; i++) {
            const bed = await BedModel.create({ code: String(i), room: room._id });
            if (!bed) {
                throw createHttpError.BadRequest(`Beds create error.`)
            }
            beds.push(bed);
        }
        const updateRoom = await RoomModel.findByIdAndUpdate(room._id, { beds: beds.map(bed => bed._id) });
        if (!updateRoom) {
            throw createHttpError.BadRequest(`update beds room error.`)
        }
        return room;
    } catch (error) {
        throw new Error(error.toString());
    }
};

const getOneRoom = async ({ id }) => {
    try {
        const result = await RoomModel.findOne({ _id: id })
            .populate('beds')
            .populate('roomType')
            .populate('dormFloor')
            .populate('dormitory')

        return result
    } catch (error) {
        throw new Error(error.toString());
    }
};



// const editDorm = async ({ _id,name, numberFloor }) => {
//     try {

//       const updateDorm = await DomModel.findOneAndUpdate(
//         { _id: _id },
//         { name, numberFloor},
//         { new: true }
//       );
//       if (!updateDorm) {
//         throw createHttpError.NotFound(`Dorm ${_id} not existing.`)
//       }
//       return updateDorm._doc;
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
//         throw createHttpError.NotFound(`Branch ${id} not existing.`)
//       }
//       return updateBranch._doc;
//     } catch (error) {
//       throw new Error(error.toString());
//     }
//   };


export default {
    addRoom,
    getRoomByDormFloorId,
    getOneRoom
};
