import mongoose from 'mongoose';

const DOCUMENT_NAME = 'SupportEW';
const COLLECTION_NAME = 'SupportEWs';

const supportSchema = new mongoose.Schema(
  {
    numWater: {
      type: Number,
      required: true,
    },
    numElectronic: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true, collection: COLLECTION_NAME }
);

const SupportEWModel = mongoose.model(DOCUMENT_NAME, supportSchema);

export default SupportEWModel;
