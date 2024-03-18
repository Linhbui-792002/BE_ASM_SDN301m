import mongoose from 'mongoose';

const DOCUMENT_NAME = 'Branch';
const COLLECTION_NAME = 'Branches';

const branchSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true, collection: COLLECTION_NAME }
);

const BranchModel = mongoose.model(COLLECTION_NAME, branchSchema);

export default BranchModel;
