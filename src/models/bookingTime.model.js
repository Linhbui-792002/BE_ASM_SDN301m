import mongoose from 'mongoose';

const DOCUMENT_NAME = 'BookingTime';
const COLLECTION_NAME = 'BookingTimes';

const bookingTimeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    to: {
      type: Date,
      required: true,
    },
    from: {
      type: Date,
      required: true,
    },
    status: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true, collection: COLLECTION_NAME }
);

const BookingTimeModel = mongoose.model(COLLECTION_NAME, bookingTimeSchema);

export default BookingTimeModel;
