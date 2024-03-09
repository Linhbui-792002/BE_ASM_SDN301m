import mongoose from "mongoose";

const DOCUMENT_NAME = "Branch";
const COLLECTION_NAME = "Branches";

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
  { timestamps: true, collection: COLLECTION_NAME }
);

const branchModel = mongoose.model(DOCUMENT_NAME, branchSchema);

module.exports = branchModel;
