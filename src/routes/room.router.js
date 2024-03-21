import express from 'express';
import { RoomController } from '../controllers/index.js';

const roomRouter = express.Router();

roomRouter.get('/', RoomController.getAllRoomByDormFloorId);
roomRouter.get('/:id', RoomController.getOneRoomById);
roomRouter.post('/', RoomController.createRoom);


export default roomRouter;
