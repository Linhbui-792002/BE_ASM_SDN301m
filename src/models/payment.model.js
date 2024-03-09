import mongoose from 'mongoose';

const DOCUMENT_NAME = 'Payment';
const COLLECTION_NAME = 'Payments';

const paymentSchema = new mongoose.Schema(
  {
    receipt: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Receipts',
    },
    amount: {
      type: Number,
      required: true,
    },
    reference_code: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true, collection: COLLECTION_NAME }
);

const paymentModel = mongoose.model(DOCUMENT_NAME, paymentSchema);

export default paymentModel;
