import mongoose from 'mongoose';

const DOCUMENT_NAME = 'RoomType';
const COLLECTION_NAME = 'RoomTypes';

const roomTypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    bed_num: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
     support_ew: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "SupportEWs",
    },
  },
  { timestamps: true }
);

const roomModel = mongoose.model('room', roomSchema);

export default roomModel;
