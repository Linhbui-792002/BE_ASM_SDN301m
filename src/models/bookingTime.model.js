import mongoose from "mongoose";

const DOCUMENT_NAME = "BookingTime";
const COLLECTION_NAME = "BookingTimes";

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
    user: {
      _id: {
        type: mongoose.Types.ObjectId,
      },
      first_name: {
        type: String,
        trim: true,
      },
      last_name: {
        type: String,
        trim: true,
      },
    },
  },
  { timestamps: true, collection: COLLECTION_NAME }
);

const bookingTimeModel = mongoose.model(DOCUMENT_NAME, bookingTimeSchema);

module.exports = bookingTimeModel;
