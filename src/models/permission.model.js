const mongoose = require("mongoose");
const permissionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    user: {
      _id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "users",
      },
      full_name: {
        type: String,
      },
      point: {
        type: Number,
      },
    },
  },
  { timestamps: true }
);

const permissionModel = mongoose.model("permissions", permissionSchema);

module.exports = permissionModel;
