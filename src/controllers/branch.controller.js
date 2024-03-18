import { BranchRepo } from "../repositories/index.js";
import createHttpError from "http-errors";


const createBranch = async (req, res,next) => {
  try {

    const { name, address}  = req.body

    const result = await BranchRepo.addBranch({name, address});
    res.status(201).json({
        statusCode: 201,
        message: 'create branch success',
        data: result,
      });
  } catch (error) {
         next(error)
  }
};


const editBranch = async (req, res,next) => {
  try {

    const {_id, name, address}  = req.body

    const result = await BranchRepo.editBranch({_id,name, address});
    res.status(200).json({
        statusCode: 200,
        message: 'edit branch success',
        data: result,
      });
  } catch (error) {
         next(error)
  }
};



const deleteBranch = async (req, res,next) => {
  try {

    const {id}  = req.params

    const result = await BranchRepo.deleteBranch({id});
    res.status(200).json({
        statusCode: 200,
        message: 'delete branch success',
        data: result,
      });
  } catch (error) {
         next(error)
  }
};


const getOneBranch = async (req, res,next) => {
  try {

    const {id}  = req.params

    const result = await BranchRepo.getBranchById({id});
    res.status(200).json({
        statusCode: 200,
        message: 'get one branch success',
        data: result,
      });
  } catch (error) {
         next(error)
  }
};


const getAllBranch= async (req, res,next) => {
    try {
      const { page, limit}  = req.query;
      const result = await BranchRepo.getBranch({ page, limit} );
      res.status(200).json({
          statusCode: 200,
          message: 'get all branch success',
          data: result,
        });
    } catch (error) {
           next(error)
    }
  };

export default {
    createBranch,
    getAllBranch,
    editBranch,
    deleteBranch,
    getOneBranch
};