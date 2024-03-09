import mongoose from 'mongoose';

const DOCUMENT_NAME = 'Receipt';
const COLLECTION_NAME = 'Receipts';

const receiptSchema = new mongoose.Schema(
  {
    booking: {
      user: {
        _id: {
          type: mongoose.SchemaTypes.ObjectId,
        },
        full_name: {
          type: String,
          trim: true,
        },
      },
      bed: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'booking',
        required: true,
      },
    },
    total_price: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ['Pending', 'Success', 'Fail'],
      default: 'Pending',
    },
  },
  { timestamps: true, collection: COLLECTION_NAME }
);

const receiptModel = mongoose.model(DOCUMENT_NAME, receiptSchema);

export default receiptModel;
