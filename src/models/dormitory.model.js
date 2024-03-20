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
        type: mongoose.Types.ObjectId,
        ref: 'Branches',
      },
      name: {
        type: String,
      },
    },
    manager: {
      type: mongoose.Types.ObjectId,
      ref: 'Users',
    },
    numberFloor: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true, collection: COLLECTION_NAME }
);

const DomModel = mongoose.model(COLLECTION_NAME, domSchema);

export default DomModel;
