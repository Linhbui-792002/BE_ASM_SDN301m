"use strict";

import mongoose, { ObjectId } from "mongoose";

const DOCUMENT_NAME = "Account";
const COLLECTION_NAME = "Accounts";

const accountSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique:true,
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
      _id: {
        type: ObjectId,
        ref: "Roles",
      },
      name: {
        type: String,
      },
    },
    is_active: {
      type: Boolean,
      enum: [true, false],
      default: false,
    },
    created_by: {
      _id: {
        type: ObjectId,
        ref: "Users",
      },
    },
    updated_by: {
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

const AccountModel = mongoose.model(DOCUMENT_NAME, accountSchema);

export default  AccountModel;
