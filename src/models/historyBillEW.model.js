import mongoose from "mongoose";

const DOCUMENT_NAME = "HistoryBillEW";
const COLLECTION_NAME = "HistoryBillEWs";

const historyBillEWSchema = new mongoose.Schema(
  {
    room: {
      _id: {
        type: mongoose.Types.ObjectId,
        ref: "Rooms",
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
    number_water_used: {
      type: Number,
      required: true,
    },
    number_electronic_used: {
      type: Number,
      required: true,
    },
    electric_price: {
      type: Number,
      required: true,
    },
    water_price: {
      type: Number,
      required: true,
    },
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Users",
    },
  },
  { timestamps: true, collection: COLLECTION_NAME }
);

const historyBillEWModel = mongoose.model(DOCUMENT_NAME, historyBillEWSchema);

module.exports = historyBillEWModel;
