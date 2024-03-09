import mongoose from "mongoose";

const DOCUMENT_NAME = "Permission";
const COLLECTION_NAME = "Permissions";

const permissionSchema = new mongoose.Schema(
  {
    permission: {
      type: String,
      requied: true,
      enum: ["0000", "1111", "2222"],
      default: "0000",
    },
  },
  { timestamps: true, collection: COLLECTION_NAME }
);

const permissionModel = mongoose.model(DOCUMENT_NAME, permissionSchema);

module.exports = permissionModel;
