import mongoose from 'mongoose';

const DOCUMENT_NAME = 'HistoryBillEWDetail';
const COLLECTION_NAME = 'HistoryBillEWDetails';

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

const HistoryBillEWModel = mongoose.model(COLLECTION_NAME, historyEWDetailSchema);

module.exports = HistoryBillEWModel;
