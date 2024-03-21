import express from 'express';
import { HistoryEWController } from '../controllers/index.js';

const historyEwRouter = express.Router();

// historyEwRouter.get('/', DormFloorController.getAllDormFloorByDormId);
historyEwRouter.get('/room-id', HistoryEWController.getLastHistoryEWDetail);
historyEwRouter.post('/', HistoryEWController.createHistoryEW);
// historyEwRouter.patch('/', DormFloorController.updateDormFloor);

export default historyEwRouter;
