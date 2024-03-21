import mongoose from 'mongoose';

const DOCUMENT_NAME = 'User';
const COLLECTION_NAME = 'Users';

const userSchema = new mongoose.Schema(
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
    phoneNumber: {
      type: String,
    },
    image: {
      type: String,
      trim: true,
    },
    gender: {
      type: Number,
      required: true,
      enum: [1, 0],
      default: 1,
    },
    log: [
      {
        _id: {
          type: mongoose.Types.ObjectId,
          ref: 'LogHistories',
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
  { collection: COLLECTION_NAME, timestamps: true }
);

const UserModel = mongoose.model(COLLECTION_NAME, userSchema);

export default UserModel;
