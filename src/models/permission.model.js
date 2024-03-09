const mongoose = require("mongoose");
const permissionSchema = new mongoose.Schema(
  {
    permission: {
      type: String,
      requied: true,
      enum: ['0000', '1111', '2222'],
      default:'0000',
    }
  },
  { timestamps: true }
);

const permissionModel = mongoose.model("permissions", permissionSchema);

module.exports = permissionModel;
