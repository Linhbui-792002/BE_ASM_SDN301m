const mongoose = require("mongoose");

const furnitureSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const furnitureModel = mongoose.model("furniture", furnitureSchema);

module.exports = furnitureModel;
