import mongoose from 'mongoose';

const DOCUMENT_NAME = 'Dormitory';
const COLLECTION_NAME = 'Dormitories';

const domSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    branch: {
      _id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Branches',
      },
      name: {
        type: String,
      },
    },
    manager: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Users',
    },
    number_floor: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true, collection: COLLECTION_NAME }
);

const domModel = mongoose.model(DOCUMENT_NAME, domSchema);

export default domModel;
