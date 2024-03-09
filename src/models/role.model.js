const mongoose = require("mongoose");
const roleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    permission: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "permissions",
      }
    ],
  },
  { timestamps: true }
);

const roleModel = mongoose.model("roles", roleSchema);

module.exports = roleModel;
