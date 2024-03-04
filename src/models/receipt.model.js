const mongoose = require("mongoose");

const receiptSchema = new mongoose.Schema(
  {
    booking: {
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
      bed: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "booking",
        required: true,
      },
    },
    total_price: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const receiptModel = mongoose.model("receipt", receiptSchema);

module.exports = receiptModel;
