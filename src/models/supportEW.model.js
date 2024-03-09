const mongoose = require("mongoose");

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

const supportModel = mongoose.model("Support", supportSchema);

module.exports = supportModel;
