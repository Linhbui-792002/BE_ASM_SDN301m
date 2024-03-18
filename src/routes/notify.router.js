import express from 'express';
import { NotifyController } from '../controllers/index.js';

const notifyRouter = express.Router();

notifyRouter.get('/', NotifyController.getAllNotify);
notifyRouter.get('/:id', NotifyController.getOneNotify);
notifyRouter.post('/', NotifyController.createNotify);
notifyRouter.patch('/', NotifyController.editOneNotify);
notifyRouter.delete('/:id', NotifyController.deleteOneNotify);

export default notifyRouter;
