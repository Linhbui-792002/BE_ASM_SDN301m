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
    password: {
      type: String,
      required: true,
    },
    reset: {
      code: {
        type: String,
        default: null,
      },
      time: {
        type: String,
        default: null,
      },
    },
  },
  { collection: "users", timestamps: true }
);

const userModel = mongoose.model("users", userShema);

module.exports = userModel;
