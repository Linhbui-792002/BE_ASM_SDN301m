import express from 'express';
import { TypeRoomController } from '../controllers/index.js';

const typeRoomRouter = express.Router();

typeRoomRouter.post('/', TypeRoomController.createTypeRoom);


export default typeRoomRouter;
