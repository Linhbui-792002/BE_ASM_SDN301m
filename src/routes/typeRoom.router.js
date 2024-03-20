import express from 'express';
import { TypeRoomController } from '../controllers/index.js';

const typeRoomRouter = express.Router();

typeRoomRouter.get('/', TypeRoomController.getAllTypeRoom);
typeRoomRouter.get('/:id', TypeRoomController.getOneTypeRoom);
typeRoomRouter.post('/', TypeRoomController.createTypeRoom);
typeRoomRouter.patch('/', TypeRoomController.editTypeRoom);


export default typeRoomRouter;
