"use strict";

import mongoose, { ObjectId } from "mongoose";

const DOCUMENT_NAME = "Account";
const COLLECTION_NAME = "Accounts";

const accountSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    branch: {
      _id: {
        type: ObjectId,
        ref: "Branches",
      },
      name: {
        type: String,
      },
    },
    user: {
      type: ObjectId,
      ref: "Users",
    },
    role: {
      type: String,
    },
    isActive: {
      type: Boolean,
      enum: [true, false],
      default: true,
    },
    createdBy: {
      _id: {
        type: ObjectId,
        ref: "Users",
      },
    },
    updatedBy: {
      _id: {
        type: ObjectId,
        ref: "Users",
      },
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

const AccountModel = mongoose.model(COLLECTION_NAME, accountSchema);

export default AccountModel;
