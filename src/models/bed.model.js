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
      status: {
        type: String,
        required: true,
        trim: true,
      },
    },
    price: {
      type: Number,
      required: true,
    },
    number_water: {
      type: Number,
      required: true,
    },
    number_electric: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true, collection: COLLECTION_NAME }
);

const bedModel = mongoose.model(DOCUMENT_NAME, bedSchema);

export default bedModel;
