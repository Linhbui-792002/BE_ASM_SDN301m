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
    status: {
      type: String,
      required: true,
      enum: ['Pending', 'Success', 'Reject'],
      defalt: 'Pending',
    },
  },
  { timestamps: true, collection: COLLECTION_NAME }
);

const BookingModel = mongoose.model(DOCUMENT_NAME, bookingSchema);

export default BookingModel;
