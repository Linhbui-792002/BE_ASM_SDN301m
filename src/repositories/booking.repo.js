import createHttpError from 'http-errors';
import BookingModel from '../models/booking.model.js';

const getBooking = async ({ page = 1, limit = 10, userId, status }) => {
    try {
        let filter = {};
        if (userId) {
            filter.user = userId;
        }
        if (status) {
            filter.status = status;
        }
        console.log(typeof name)

        const skips = limit * (page - 1);
        const result = await BookingModel.find(filter)
            .populate('user')
            .populate('bookingTime')
            .sort({ createdAt: -1 })
            .skip(skips).limit(limit);
        const total = await BookingModel.countDocuments(filter);
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


const getBookingById = async ({ id }) => {
    try {

        const result = await BookingModel.findOne({ _id: id })
        if (!result) {
            throw createHttpError.NotFound(`Booking time ${_id} not existing.`)
        }
        return result
    } catch (error) {
        throw new Error(error.toString());
    }
};

const addBooking = async ({ userId, bedId, bookingTime }) => {
    try {
        console.log(bedId, 'bedId')
        const existBooking = await BookingModel.findOne({ user: userId, bookingTime: bookingTime })
        console.log(existBooking, 'existBooking')
        if (existBooking) {
            throw createHttpError.Conflict(`Bạn đã đăng ký phòng học kỳ này rồi.`)
        }
        const booking = await BookingModel.create({ user: userId, bed: bedId, bookingTime })
        return booking;
    } catch (error) {
        throw new Error(error.toString());
    }
};


const editBooking = async ({ _id, status }) => {
    try {
        const getBed = await BookingModel.findOne({ _id: _id }).populate('bed').exec()
        console.log(getBed, 'getBed')

        const updateBooking = await BookingModel.findOneAndUpdate(
            { _id: _id },
            { status },
            { new: true }
        );
        if (!updateBooking) {
            throw createHttpError.NotFound(`Booking Time ${_id} not existing.`)
        }
        return updateBooking._doc;
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
    addBooking,
    getBooking,
    getBookingById,
    editBooking
};
