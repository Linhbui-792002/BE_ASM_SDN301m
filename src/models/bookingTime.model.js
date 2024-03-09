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
    user: {
        _id: {
          type: mongoose.SchemaTypes.ObjectId,
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
  { timestamps: true }
);

const bookingTimeModel = mongoose.model("bookingTime", bookingTimeSchema);

module.exports = bookingTimeModel;
