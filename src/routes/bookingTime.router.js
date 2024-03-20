import express from 'express';
import { BookingTimeController } from '../controllers/index.js';

const bookingTimeRouter = express.Router();

bookingTimeRouter.get('/', BookingTimeController.getAllBookingTime);
bookingTimeRouter.get('/:id', BookingTimeController.getOneBookingById);
bookingTimeRouter.post('/', BookingTimeController.createBookingTime);
bookingTimeRouter.patch('/', BookingTimeController.updateBookingTime);

export default bookingTimeRouter;
