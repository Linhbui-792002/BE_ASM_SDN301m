const mongoose = require("mongoose");

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
          trim: true,
        },
      },
    },
    status: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const bookingTimeModel = mongoose.model("bookingTime", bookingTimeSchema);

module.exports = bookingTimeModel;
