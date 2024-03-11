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
    //đoạn này tý nhờ anh Linh xem lại
    room_type: {
      type: mongoose.Types.ObjectId,
      ref: 'RoomTypes',
    },
  },
  { timestamps: true }
);

const roomModel = mongoose.model('room', roomSchema);

export default roomModel;
