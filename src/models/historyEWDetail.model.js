import mongoose from 'mongoose';

const DOCUMENT_NAME = 'historyBillEWDetail';
const COLLECTION_NAME = 'historyBillEWDetails';

const historyEWDetailSchema = new mongoose.Schema(
  {
    room: {
      _id: {
        type: mongoose.Types.ObjectId,
        ref: 'Rooms',
      },
      name: {
        type: String,
      },
    },
    new_electric: {
      type: Number,
      required: true,
    },
    old_electric: {
      type: Number,
      required: true,
    },
    new_water: {
      type: Number,
      required: true,
    },
    old_water: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true, collection: COLLECTION_NAME }
);

const HistoryBillEWModel = mongoose.model(DOCUMENT_NAME, historyBillEWSchema);

export default HistoryEWDetailSchema;
