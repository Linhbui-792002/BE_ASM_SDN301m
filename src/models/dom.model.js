const mongoose = require("mongoose");

const domSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    branch: {
      _id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "branch",
      },
      name: {
        type: String,
      },
    },
    manager: {
      _id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "branch",
      },
      full_name: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        trim: true,
      },
      phone: {
        type: String,
        required: true,
        trim: true,
      },
    },
    number_floor: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const domModel = mongoose.model("DOM", domSchema);

module.exports = domModel;
