const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const branchModel = mongoose.model("branches", branchSchema);

module.exports = branchModel;
