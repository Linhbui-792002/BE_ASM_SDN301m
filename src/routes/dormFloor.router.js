import express from 'express';
import { DormFloorController } from '../controllers/index.js';

const dormFloorRouter = express.Router();

dormFloorRouter.get('/', DormFloorController.getAllDormFloorByDormId);
dormFloorRouter.get('/:id', DormFloorController.getOneDormFloor);
dormFloorRouter.post('/', DormFloorController.createDormFloor);
dormFloorRouter.patch('/', DormFloorController.updateDormFloor);

export default dormFloorRouter;
