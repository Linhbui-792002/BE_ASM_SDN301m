const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    receipt: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "receipt",
    },
    amount: {
      type: Number,
      required: true,
    },
    reference_code: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const paymentModel = mongoose.model("payment", paymentSchema);

module.exports = paymentModel;
