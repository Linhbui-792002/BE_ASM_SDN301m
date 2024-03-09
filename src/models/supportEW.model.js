import mongoose from "mongoose";

const DOCUMENT_NAME = "SupportEW";
const COLLECTION_NAME = "SupportEWs";

const supportSchema = new mongoose.Schema(
  {
    water: {
      type: Number,
      required: true,
    },
    electronic: {
      type: Number,
      required: true,
    },
    createdBy: {
      _id: {
        type: mongoose.Types.ObjectId,
        ref: "Users",
      },
      name: {
        type: String,
      },
    },
    updatedBy: {
      _id: {
        type: mongoose.Types.ObjectId,
        ref: "Users",
      },
      name: {
        type: String,
      },
    },
  },
  { timestamps: true, collection: COLLECTION_NAME }
);

const supportModel = mongoose.model(DOCUMENT_NAME, supportSchema);

module.exports = supportModel;
