import mongoose from 'mongoose';

const DOCUMENT_NAME = 'LogHistory';
const COLLECTION_NAME = 'LogHistories';

const logHistorySchema = new mongoose.Schema(
  {
    point: {
      type: Number,
      required: true,
    },
    context: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true, collection: COLLECTION_NAME }
);

const logHistoryModel = mongoose.model(DOCUMENT_NAME, logHistorySchema);

export default logHistoryModel;
