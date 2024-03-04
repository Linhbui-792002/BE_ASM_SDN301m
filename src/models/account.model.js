const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    branch: {
      _id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "branch",
      },
      name: {
        type: String,
      },
    },
    user: {
      _id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "user",
      },
    },
    role: {
      _id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "branch",
      },
      name: {
        type: String,
      },
    },
    is_active: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const accountModel = mongoose.model("accounts", accountSchema);

module.exports = accountModel;
