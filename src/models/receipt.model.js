import mongoose from 'mongoose';

const DOCUMENT_NAME = 'Receipt';
const COLLECTION_NAME = 'Receipts';

const receiptSchema = new mongoose.Schema(
  {
    booking: {
      user: {
        _id: {
          type: mongoose.Types.ObjectId,
        },
        full_name: {
          type: String,
          trim: true,
        },
      },
      bed: {
        type: mongoose.Types.ObjectId,
        ref: 'Bookings',
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

const ReceiptModel = mongoose.model(DOCUMENT_NAME, receiptSchema);

export default ReceiptModel;
