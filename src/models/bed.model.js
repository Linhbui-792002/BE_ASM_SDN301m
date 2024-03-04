const mongoose = require("mongoose");

const bedSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      trim: true,
    },
    room: {
      _id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "room",
      },
      status: {
        type: String,
        required: true,
        trim: true,
      },
      default_number_water_per_bed: {
        type: Number,
        required: true,
      },
      default_number_electronic_per_bed: {
        type: Number,
        required: true,
      },
    },
    price: {
      type: Number,
      required: true,
    },
    number_water: {
      type: Number,
      required: true,
    },
    number_electric: {
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

const bedModel = mongoose.model("bed", bedSchema);

module.exports = bedModel;
