import { HistoryEWRepo } from "../repositories/index.js";
import createHttpError from "http-errors";


const createHistoryEW = async (req, res, next) => {
    try {

        const { roomId, timeId, newElectric, oldElectric, newWater, oldWater } = req.body

        const result = await HistoryEWRepo.addHistoryEWDetail({ roomId, timeId, newElectric, oldElectric, newWater, oldWater });

        res.status(201).json({
            statusCode: 201,
            message: 'create History E_W detail success',
            data: result,
        });

    } catch (error) {
        next(error)
    }
};

const getLastHistoryEWDetail = async (req, res, next) => {
    try {
        const { roomId } = req.query;

        const result = await HistoryEWRepo.getLastHistoryEWDetialByRoomId({ roomId });

        res.status(200).json({
            statusCode: 200,
            message: 'get History E_W detail success',
            data: result,
        });
    } catch (error) {
        next(error)
    }
}

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
    createHistoryEW,
    getLastHistoryEWDetail
};