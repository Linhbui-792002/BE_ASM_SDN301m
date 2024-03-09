import mongoose from "mongoose";

const DOCUMENT_NAME = "Notifycation";
const COLLECTION_NAME = "Notifycations";

const notifycationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    context: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      trim: true,
    },
    branch: {
      _id: {
        type: mongoose.Types.ObjectId,
        ref: "Branches",
      },
      branch_name: {
        type: String,
      },
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

const notifycationModel = mongoose.model(DOCUMENT_NAME, notifycationSchema);

module.exports = notifycationModel;
