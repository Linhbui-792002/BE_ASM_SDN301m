import DormFloorModel from '../models/dormFloor.model.js';
import DomModel from '../models/dormitory.model.js';
import { getInfoData } from '../utils/index.js';
import createHttpError from 'http-errors';

const getDormFloorByDormId = async ({ dormId }) => {
    try {
        const result = await DormFloorModel.find({ dorm: dormId })
            .sort({ floorNumber: 1 })

        return {
            data: result,
        };
    } catch (error) {
        throw new Error(error.toString());
    }
};

const getDormFloorById = async ({ id }) => {
    try {

        const result = await DormFloorModel.findOne({ _id: id })
        if (!result) {
            throw createHttpError.NotFound(`Dorm floor ${_id} not existing.`)
        }
        return result
    } catch (error) {
        throw new Error(error.toString());
    }
};

const addDormFloor = async ({ name, floorNumber, numberRoom, dorm }) => {
    try {
        const existdorm = await DomModel.findOne({ _id: dorm }).exec();
        if (existdorm && existdorm.numberFloor < floorNumber) {
            throw createHttpError.Conflict(`floor number  ${floorNumber} must be less than ${existdorm.numberFloor}`)
        }
        const existFloorNumber = await DormFloorModel.findOne({ dorm: dorm, floorNumber: floorNumber }).exec()

        if (existFloorNumber) {
            throw createHttpError.Conflict(`floor number ${floorNumber} existed.`)
        }
        const dormFloor = await DormFloorModel.create({ name, floorNumber, numberRoom, dorm })
        return dormFloor;
    } catch (error) {
        throw new Error(error.toString());
    }
};


const editDormFloor = async ({ _id, name, floorNumber, numberRoom }) => {
    try {

        const updateDormFloor = await DormFloorModel.findOneAndUpdate(
            { _id: _id },
            { name, floorNumber, numberRoom },
            { new: true }
        );
        if (!updateDormFloor) {
            throw createHttpError.NotFound(`Dorm floor ${_id} not existing.`)
        }
        return updateDormFloor._doc;
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
    addDormFloor,
    getDormFloorByDormId,
    getDormFloorById,
    editDormFloor
};
