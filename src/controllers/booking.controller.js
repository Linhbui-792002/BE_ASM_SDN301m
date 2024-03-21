import { BookingRepo } from "../repositories/index.js";
import createHttpError from "http-errors";


const createBooking = async (req, res, next) => {
    try {
        const {
            bed,
            bookingTime } = req.body
        const { _id } = req.payload
        const userId = _id
        const result = await BookingRepo.addBooking({
            userId,
            bed,
            bookingTime
        });
        res.status(201).json({
            statusCode: 201,
            message: 'create booking success',
            data: result,
        });
    } catch (error) {
        next(error)
    }
};


const updateBooking = async (req, res, next) => {
    try {

        const { _id, status } = req.body

        const result = await BookingRepo.editBooking({ _id, status });
        res.status(200).json({
            statusCode: 200,
            message: 'edit booking success',
            data: result,
        });
    } catch (error) {
        next(error)
    }
};



// const deleteBranch = async (req, res,next) => {
//   try {

//     const {id}  = req.params

//     const result = await BranchRepo.deleteBranch({id});
//     res.status(200).json({
//         statusCode: 200,
//         message: 'delete branch success',
//         data: result,
//       });
//   } catch (error) {
//          next(error)
//   }
// };


const getOneBookingById = async (req, res, next) => {
    try {

        const { id } = req.params

        const result = await BookingRepo.getBookingById({ id });
        res.status(200).json({
            statusCode: 200,
            message: 'get one booking time success',
            data: result,
        });
    } catch (error) {
        next(error)
    }
};


const getAllBooking = async (req, res, next) => {
    try {

        const { page, limit, userId, status } = req.query;
        const result = await BookingRepo.getBooking({ page, limit, userId, status });
        res.status(200).json({
            statusCode: 200,
            message: 'get all booking time success',
            data: result,
        });
    } catch (error) {
        next(error)
    }
};

export default {
    createBooking,
    getAllBooking,
    getOneBookingById,
    updateBooking
};