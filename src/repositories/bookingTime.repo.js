import createHttpError from 'http-errors';
import BookingTimeModel from '../models/bookingTime.model.js';

const getBookingTime = async ({ page = 1, limit = 10 }) => {
    try {
        const skips = limit * (page - 1);
        const result = await BookingTimeModel.find({})
            .sort({ createdAt: -1 })
            .skip(skips).limit(limit);
        const total = await BookingTimeModel.countDocuments();
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

const addBookingTime = async ({ name, to, from }) => {
    try {
        const dorm = await BookingTimeModel.create({ name, to, from })
        return dorm;
    } catch (error) {
        throw new Error(error.toString());
    }
};


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
    addBookingTime,
    getBookingTime,
    getBookingTimeById,
    editBookingTime
};
