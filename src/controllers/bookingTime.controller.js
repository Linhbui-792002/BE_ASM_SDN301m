import { BookingTimeRepo } from "../repositories/index.js";
import createHttpError from "http-errors";


const createBookingTime = async (req, res, next) => {
    try {

        const { name, to, from } = req.body

        const result = await BookingTimeRepo.addBookingTime({ name, to, from });
        res.status(201).json({
            statusCode: 201,
            message: 'create booking time success',
            data: result,
        });
    } catch (error) {
        next(error)
    }
};


const updateBookingTime = async (req, res, next) => {
    try {

        const { _id, name, to, from } = req.body

        const result = await BookingTimeRepo.editBookingTime({ _id, name, to, from });
        res.status(200).json({
            statusCode: 200,
            message: 'edit booking time success',
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

        const result = await BookingTimeRepo.getBookingTimeById({ id });
        res.status(200).json({
            statusCode: 200,
            message: 'get one booking time success',
            data: result,
        });
    } catch (error) {
        next(error)
    }
};


const getAllBookingTime = async (req, res, next) => {
    try {
        const { page, limit } = req.query;
        const result = await BookingTimeRepo.getBookingTime({ page, limit });
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
    createBookingTime,
    getAllBookingTime,
    getOneBookingById,
    updateBookingTime
};