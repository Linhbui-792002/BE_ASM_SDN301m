import mongoose from 'mongoose';

const DOCUMENT_NAME = 'Bed';
const COLLECTION_NAME = 'Beds';

const bedSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      trim: true,
    },
    room: {
      _id: {
        type: mongoose.Types.ObjectId,
        ref: 'Rooms',
      },
    },
    status: {
      type: Boolean,
      default: false
    },
  },
  { timestamps: true, collection: COLLECTION_NAME }
);

const BedModel = mongoose.model(COLLECTION_NAME, bedSchema);

export default BedModel;
