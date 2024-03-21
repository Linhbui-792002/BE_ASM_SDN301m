import express from 'express';
import { DormController } from '../controllers/index.js';

const dormRouter = express.Router();

dormRouter.get('/', DormController.getAllDorm);
dormRouter.get('/booking-dorm', DormController.getAllDormBooking);
dormRouter.get('/:id', DormController.getOneDorm);
dormRouter.post('/', DormController.createDorm);
dormRouter.patch('/', DormController.updateDorm);

export default dormRouter;
