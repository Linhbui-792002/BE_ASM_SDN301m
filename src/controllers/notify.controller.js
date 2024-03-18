import { NotifyRepo } from "../repositories/index.js";
import createHttpError from "http-errors";


const createNotify = async (req, res,next) => {
  try {

    const { title, context,slug, branchId}  = req.body
  //   const  branch = {_id:'65f6fc6a099cd4d9192e5738',
  // name:"Hòa Lạc"}
 
    const createdBy = {_id:'65f6fce8099cd4d9192e573b',
                        firstName:"Linh", lastName:'Bui Xuan'}

    const result = await NotifyRepo.addNotify({title, context,slug, branchId, createdBy});

    res.status(200).json({
        statusCode: 200,
        message: 'create notify success',
        data: result,
      });
  } catch (error) {
         next(error)
  }
};

const editOneNotify = async (req, res,next) => {
  try {
    const { _id,title, context,slug, branchId}  = req.body
 
    const updatedBy = {_id:'65f6fce8099cd4d9192e573b',
                        firstName:"Linh", lastName:'Bui Xuan'}

    const result = await NotifyRepo.editNotify({ _id,title, context,slug, branchId,updatedBy});
    res.status(200).json({
        statusCode: 200,
        message: 'edit notify success',
        data: result,
      });
  } catch (error) {
         next(error)
  }
};



const getAllNotify = async (req, res,next) => {
    try {
      const { page, limit}  = req.query;
      const result = await NotifyRepo.getNotifies({ page, limit} );
      res.status(200).json({
          statusCode: 200,
          message: 'get all notify success',
          data: result,
        });
    } catch (error) {
           next(error)
    }
  };

  const getOneNotify = async (req, res,next) => {
    try {
  
      const {id}  = req.params
  
      const result = await NotifyRepo.getNotifyById({id});
      res.status(200).json({
          statusCode: 200,
          message: 'get one notify success',
          data: result,
        });
    } catch (error) {
           next(error)
    }
  };
  



const deleteOneNotify = async (req, res,next) => {
  try {

    const {id}  = req.params

    const result = await NotifyRepo.deleteNotify({id});
    res.status(200).json({
        statusCode: 200,
        message: 'delete notify success',
        data: result,
      });
  } catch (error) {
         next(error)
  }
};
export default {
    createNotify,
    getAllNotify,
    getOneNotify,
    editOneNotify,
    deleteOneNotify
};