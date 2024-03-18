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
    bedNum: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    supportEw: {
      type: mongoose.Types.ObjectId,
      ref: 'SupportEWs',
    },
  },
  { timestamps: true ,collection: COLLECTION_NAME}
);

const RoomTypeModel = mongoose.model(COLLECTION_NAME, roomTypeSchema);

export default RoomTypeModel;
