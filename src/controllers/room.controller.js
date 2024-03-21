import { RoomRepo } from "../repositories/index.js";
import createHttpError from "http-errors";


const createRoom = async (req, res, next) => {
    try {

        const { name, roomNumber, gender, roomType, dormitory, dormFloor } = req.body

        const result = await RoomRepo.addRoom({ name, gender, roomNumber, roomType, dormitory, dormFloor });
        res.status(201).json({
            statusCode: 201,
            message: 'create room success',
            data: result,
        });
    } catch (error) {
        next(error)
    }
};


// const updateDorm = async (req, res, next) => {
//   try {

//     const { _id, name, numberFloor } = req.body

//     const result = await DormRepo.editDorm({ _id, name, numberFloor });
//     res.status(200).json({
//       statusCode: 200,
//       message: 'edit dorm success',
//       data: result,
//     });
//   } catch (error) {
//     next(error)
//   }
// };



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


const getOneRoomById = async (req, res, next) => {
  try {

    const { id } = req.params

    const result = await RoomRepo.getOneRoom({ id });
    res.status(200).json({
      statusCode: 200,
      message: 'get one room success',
      data: result,
    });
  } catch (error) {
    next(error)
  }
};


const getAllRoomByDormFloorId = async (req, res, next) => {
    try {
        const { dormFloorId } = req.query;
        const result = await RoomRepo.getRoomByDormFloorId({ dormFloorId });
        res.status(200).json({
            statusCode: 200,
            message: 'get list room success',
            data: result,
        });
    } catch (error) {
        next(error)
    }
};


export default {
    createRoom,
    getAllRoomByDormFloorId,
    getOneRoomById
};