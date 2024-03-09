import mongoose from 'mongoose';

const DOCUMENT_NAME = 'User';
const COLLECTION_NAME = 'Users';

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
      trim: true,
    },
    last_name: {
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
    phone_number: {
      type: String,
      required: true,
      trim: true,
      unique: true,
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
          ref: 'log',
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

const UserModel = mongoose.model(DOCUMENT_NAME, userSchema);

export default UserModel;
