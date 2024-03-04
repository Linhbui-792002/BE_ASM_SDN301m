const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: Number,
      required: true,
    },
    Bed_num: {
      type: Number,
      required: true,
    },
    DOM: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "DOM",
    },
    furniture: [
      {
        _id: {
          type: mongoose.SchemaTypes.ObjectId,
          required: true,
        },
        name: {
          type: String,
          required: true,
          trim: true,
        },
        code: {
          type: String,
          required: true,
          trim: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    number_water: {
      type: Number,
      required: true,
    },
    number_electronic: {
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

const roomModel = mongoose.model("room", roomSchema);

module.exports = roomModel;
