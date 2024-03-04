const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    account: {
      _id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "users",
      },
      user: {
        _id: {
          type: mongoose.SchemaTypes.ObjectId,
        },
        full_name: {
          type: String,
          required: true,
          trim: true,
        },
      },
    },
    bed: {
      _id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "bed",
      },
      name: {
        type: String,
        required: true,
        trim: true,
      },
      status: {
        type: String,
        required: true,
        trim: true,
      },
      gender: {
        type: Number,
        required: true,
      },
    },
    booking_time: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "bookingTime",
    },
    status: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const bookingModel = mongoose.model("booking", bookingSchema);

module.exports = bookingModel;
