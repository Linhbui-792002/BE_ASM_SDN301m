const mongoose = require("mongoose");

const historyBillEWSchema = new mongoose.Schema(
  {
    room: {
      _id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "room",
      },
      name: {
        type: String,
      },
    },
    new_electric: {
      type: Number,
      required: true,
    },
    old_electric: {
      type: Number,
      required: true,
    },
    new_water: {
      type: Number,
      required: true,
    },
    old_water: {
      type: Number,
      required: true,
    },
    water_used: {
      type: Number,
      required: true,
    },
    electric_used: {
      type: Number,
      required: true,
    },
    createdBy: {
      _id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "users",
      },
      name: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

const historyBillEWModel = mongoose.model("historyBillEW", historyBillEWSchema);

module.exports = historyBillEWModel;
