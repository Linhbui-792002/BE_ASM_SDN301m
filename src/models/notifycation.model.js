const mongoose = require("mongoose");
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
        type: mongoose.SchemaTypes.ObjectId,
        ref: "users",
      },
      branch_name: {
        type: String,
      },
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
    updatedBy: {
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

const notifycationModel = mongoose.model("notifycations", notifycationSchema);

module.exports = notifycationModel;
