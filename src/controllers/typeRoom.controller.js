import { TypeRoomRepo } from "../repositories/index.js";
import createHttpError from "http-errors";


const createTypeRoom = async (req, res,next) => {
    try {
      const { name, bedNum, price,numWater,numElectronic }  = req.body
      console.log('result123')

      const result = await TypeRoomRepo.addTypeRoom({ name, bedNum, price, numWater,numElectronic });
 
      console.log(result,'result')
      res.status(200).json({
          statusCode: 200,
          message: 'create type room success',
          data: result,
        });
    } catch (error) {
           next(error)
    }
  };



  const getAllTypeRoom = async (req, res,next) => {
    try {
      const { page, limit}  = req.query;
      const result = await TypeRoomRepo.getTypeRoom({ page, limit} );
      res.status(200).json({
          statusCode: 200,
          message: 'get all type room success',
          data: result,
        });
    } catch (error) {
           next(error)
    }
  };


  const getOneTypeRoom = async (req, res,next) => {
    try {
  
      const {id}  = req.params
  
      const result = await TypeRoomRepo.getTypeRoomById({id});
      res.status(200).json({
          statusCode: 200,
          message: 'get one type room success',
          data: result,
        });
    } catch (error) {
           next(error)
    }
  };

  const editTypeRoom = async (req, res,next) => {
    try {
      const { _id,name, bedNum, price,numWater, numElectronic, supportEWId}  = req.body
      const result = await TypeRoomRepo.editOneTypeRoom({ _id,name, bedNum, price,numWater, numElectronic, supportEWId});
      res.status(200).json({
          statusCode: 200,
          message: 'edit type room success',
          data: result,
        });
    } catch (error) {
           next(error)
    }
  };

  export default {
    createTypeRoom,
    getAllTypeRoom,
    getOneTypeRoom,
    editTypeRoom
};