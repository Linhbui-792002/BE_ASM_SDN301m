import { DormFloorRepo } from "../repositories/index.js";
import createHttpError from "http-errors";


const createDormFloor = async (req, res, next) => {
    try {

        const { name, floorNumber, numberRoom, dorm } = req.body

        const result = await DormFloorRepo.addDormFloor({ name, floorNumber, numberRoom, dorm });
        res.status(201).json({
            statusCode: 201,
            message: 'create dorm floor success',
            data: result,
        });
    } catch (error) {
        next(error)
    }
};


const updateDormFloor = async (req, res, next) => {
    try {

        const { _id, name, floorNumber, numberRoom } = req.body

        const result = await DormFloorRepo.editDormFloor({ _id, name, floorNumber, numberRoom });
        res.status(200).json({
            statusCode: 200,
            message: 'edit dorm floor success',
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


// const getOneDorm = async (req, res, next) => {
//     try {

//         const { id } = req.params

//         const result = await DormRepo.getDormById({ id });
//         res.status(200).json({
//             statusCode: 200,
//             message: 'get one dorm success',
//             data: result,
//         });
//     } catch (error) {
//         next(error)
//     }
// };


const getAllDormFloorByDormId = async (req, res, next) => {
    try {
        const { dormId } = req.query;
        const result = await DormFloorRepo.getDormFloorByDormId({ dormId });
        res.status(200).json({
            statusCode: 200,
            message: 'get dorm floor success',
            data: result,
        });
    } catch (error) {
        next(error)
    }
};

const getOneDormFloor = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await DormFloorRepo.getDormFloorById({ id });
        res.status(200).json({
            statusCode: 200,
            message: 'get dorm floor success',
            data: result,
        });
    } catch (error) {
        next(error)
    }
};

export default {
    createDormFloor,
    getAllDormFloorByDormId,
    getOneDormFloor,
    updateDormFloor
};