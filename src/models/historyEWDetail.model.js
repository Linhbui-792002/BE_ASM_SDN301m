import mongoose from 'mongoose';

const DOCUMENT_NAME = 'HistoryEWDetail';
const COLLECTION_NAME = 'HistoryEWDetails';

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
    time: {
      type: mongoose.Types.ObjectId,
      ref: 'BookingTimes',
    },
    newElectric: {
      type: Number,
      required: true,
    },
    oldElectric: {
      type: Number,
      required: true,
    },
    newWater: {
      type: Number,
      required: true,
    },
    oldWater: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true, collection: COLLECTION_NAME }
);

const HistoryEWDetailModel = mongoose.model(COLLECTION_NAME, historyEWDetailSchema);

export default HistoryEWDetailModel;
