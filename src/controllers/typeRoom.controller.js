import { TypeRoomRepo } from "../repositories/index.js";
import createHttpError from "http-errors";


const createTypeRoom = async (req, res,next) => {
    try {
  
      const { name, bedNum, price,numWater,numElectronic }  = req.body
 
  
      const result = await TypeRoomRepo.addTypeRoom({ name, bedNum, price,numWater,numElectronic });
  
      res.status(200).json({
          statusCode: 200,
          message: 'create type room success',
          data: result,
        });
    } catch (error) {
           next(error)
    }
  };


  export default {
    createTypeRoom,
};