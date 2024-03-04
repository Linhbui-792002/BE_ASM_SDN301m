const mongoose = require("mongoose");

const logHistorySchema = new mongoose.Schema(
  {
    point: {
      type: Number,
      required: true,
    },
    context: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const logHistoryModel = mongoose.model("logHistories", logHistorySchema);

module.exports = logHistoryModel;
