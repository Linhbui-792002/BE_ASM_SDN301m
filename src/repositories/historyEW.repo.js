import createHttpError from 'http-errors';
import BookingTimeModel from '../models/bookingTime.model.js';
import RoomModel from '../models/room.model.js';
import HistoryEWDetailModel from '../models/historyEWDetail.model.js';

const getHistoryEWDetial = async ({ page = 1, limit = 10 }) => {
    try {
        const skips = limit * (page - 1);
        const result = await HistoryEWDetialModel.find({})
            .sort({ createdAt: -1 })
            .skip(skips).limit(limit);
        const total = await HistoryEWDetialModel.countDocuments();
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

const getBookingTimeById = async ({ id }) => {
    try {

        const result = await BookingTimeModel.findOne({ _id: id })
        if (!result) {
            throw createHttpError.NotFound(`Booking time ${_id} not existing.`)
        }
        return result
    } catch (error) {
        throw new Error(error.toString());
    }
};

const addHistoryEWDetail = async ({ roomId, timeId, newElectric, oldElectric, newWater, oldWater }) => {
    try {
        const existHistory = await HistoryEWDetailModel.findOne({ time: timeId, 'room._id': roomId }).exec()
        console.log(existHistory, 'existHistory')
        if (existHistory) {
            throw createHttpError.Conflict(`History EW  time id ${timeId} existed.`)
        }

        const existRoom = await RoomModel.findOne({ _id: roomId }).exec();

        if (!existRoom) {
            throw createHttpError.NotFound(`Room ${roomId} not existing.`)
        }
        const room = {
            _id: existRoom._id,
            name: existRoom.name
        }

        const historyEWDetail = await HistoryEWDetailModel.create({ room, time: timeId, newElectric, oldElectric, newWater, oldWater })
        return historyEWDetail;
    } catch (error) {
        throw new Error(error.toString());
    }
};
const getLastHistoryEWDetialByRoomId = async ({ roomId }) => {
    console.log(roomId)
    const existHistory = HistoryEWDetailModel.findOne({ 'room._id': roomId })
        .sort({ createdAt: -1 })
        .exec()
    if (!existHistory) {
        throw createHttpError.NotFound(`History EW of room ${roomId} existed.`)
    }
    return existHistory;
}

const editBookingTime = async ({ _id, name, to, from }) => {
    try {

        const updateBookingTime = await BookingTimeModel.findOneAndUpdate(
            { _id: _id },
            { name, to, from },
            { new: true }
        );
        if (!updateBookingTime) {
            throw createHttpError.NotFound(`Booking Time ${_id} not existing.`)
        }
        return updateBookingTime._doc;
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
    addHistoryEWDetail,
    getLastHistoryEWDetialByRoomId
    // getBookingTime,
    // getBookingTimeById,
    // editBookingTime
};
