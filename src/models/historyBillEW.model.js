import mongoose from 'mongoose';

const DOCUMENT_NAME = 'HistoryBillEW';
const COLLECTION_NAME = 'HistoryBillEWs';

const historyBillEWSchema = new mongoose.Schema(
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
    numberWaterUsed: {
      type: Number,
      required: true,
    },
    numberElectronicUsed: {
      type: Number,
      required: true,
    },
    electricPrice: {
      type: Number,
      required: true,
    },
    waterPrice: {
      type: Number,
      required: true,
    }
  },
  { timestamps: true, collection: COLLECTION_NAME }
);

const HistoryBillEWModel = mongoose.model(COLLECTION_NAME, historyBillEWSchema);

export default HistoryBillEWModel;
