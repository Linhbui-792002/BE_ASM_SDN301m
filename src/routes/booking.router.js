import express from 'express';
import { BookingController } from '../controllers/index.js';

const bookingRouter = express.Router();

bookingRouter.get('/', BookingController.getAllBooking);
bookingRouter.get('/:id', BookingController.getOneBookingById);
bookingRouter.post('/', BookingController.createBooking);
bookingRouter.patch('/', BookingController.updateBooking);

export default bookingRouter;
