import { DormRepo } from "../repositories/index.js";
import createHttpError from "http-errors";


const createDorm = async (req, res, next) => {
  try {

    const { name, numberFloor } = req.body

    const result = await DormRepo.addDorm({ name, numberFloor });
    res.status(201).json({
      statusCode: 201,
      message: 'create dorm success',
      data: result,
    });
  } catch (error) {
    next(error)
  }
};


const updateDorm = async (req, res, next) => {
  try {

    const { _id, name, numberFloor } = req.body

    const result = await DormRepo.editDorm({ _id, name, numberFloor });
    res.status(200).json({
      statusCode: 200,
      message: 'edit dorm success',
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


const getOneDorm = async (req, res, next) => {
  try {

    const { id } = req.params

    const result = await DormRepo.getDormById({ id });
    res.status(200).json({
      statusCode: 200,
      message: 'get one dorm success',
      data: result,
    });
  } catch (error) {
    next(error)
  }
};


const getAllDorm = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const result = await DormRepo.getDorm({ page, limit });
    res.status(200).json({
      statusCode: 200,
      message: 'get all dorm success',
      data: result,
    });
  } catch (error) {
    next(error)
  }
};


const getAllDormBooking = async (req, res, next) => {
  const { roomTypeID } = req.query

  const result = await DormRepo.getDormBooking({ roomTypeID });
  res.status(200).json({
    statusCode: 200,
    message: 'get all dorm booking success',
    data: result,
  });
}
export default {
  createDorm,
  getAllDorm,
  updateDorm,
  getOneDorm,
  getAllDormBooking
};