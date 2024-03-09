import mongoose from "mongoose";

const DOCUMENT_NAME = "Booking";
const COLLECTION_NAME = "Bookings";

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "users",
    },
    bed: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "bed",
    },
    status: {
      type: String,
      required: true,
      enum: ["Pending", "Success", "Reject"],
      defalt: "Pending",
    },
  },
  { timestamps: true, collection: COLLECTION_NAME }
);

const bookingModel = mongoose.model(DOCUMENT_NAME, bookingSchema);

module.exports = bookingModel;
