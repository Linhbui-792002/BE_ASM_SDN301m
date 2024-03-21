import mongoose from 'mongoose';

const DOCUMENT_NAME = 'Booking';
const COLLECTION_NAME = 'Bookings';

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'Users',
    },
    bed: {
      type: mongoose.Types.ObjectId,
      ref: 'Beds',
    },
    bookingTime: {
      type: mongoose.Types.ObjectId,
      ref: 'BookingTimes',
    },
    status: {
      type: String,
      enum: ['Pending', 'Success', 'Reject'],
      default: 'Pending',
    },
  },
  { timestamps: true, collection: COLLECTION_NAME }
);

const BookingModel = mongoose.model(COLLECTION_NAME, bookingSchema);

export default BookingModel;
