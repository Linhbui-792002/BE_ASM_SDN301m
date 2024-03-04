const mongoose = require("mongoose");
const userShema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    phone_number: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    gender: {
      type: Number,
      required: true,
    },
    log: [
      {
        _id: {
          type: mongoose.SchemaTypes.ObjectId,
          ref: "branches",
        },
        context: {
          type: String,
        },
        point: {
          type: Number,
        },
      },
    ],
  },
  { collection: "users", timestamps: true }
);

const userModel = mongoose.model("users", userShema);

module.exports = userModel;
