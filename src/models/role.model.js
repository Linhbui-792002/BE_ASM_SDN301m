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
        _id: {
          type: mongoose.SchemaTypes.ObjectId,
          ref: "permissions",
        },
        context: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

const roleModel = mongoose.model("roles", roleSchema);

module.exports = roleModel;
