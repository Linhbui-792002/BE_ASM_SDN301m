import mongoose from 'mongoose';

const DOCUMENT_NAME = 'Room';
const COLLECTION_NAME = 'Rooms';

const roomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: Number,
      required: true,
    },
    room_type: {
      type: mongoose.Types.ObjectId,
      ref: 'RoomTypes',
    },
    dormitory: {
      type: mongoose.Types.ObjectId,
      ref: 'Dormitories',
    },
    history_electric_warter: {
      type: mongoose.Types.ObjectId,
      ref: 'Dormitories',
    },
    number_water_used: {
      type: Number,
      required: true,
    },
    number_electronic_used: {
      type: Number,
      required: true,
    },
    number_water_real_used: {
      type: Number,
      required: true,
    },
    number_electronic_real_used: {
      type: Number,
      required: true,
    },
    furniture: [
      {
        _id: {
          type: mongoose.Types.ObjectId,
          required: true,
        },
        name: {
          type: String,
          required: true,
          trim: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ]
  },
  { timestamps: true, collection: COLLECTION_NAME }
);

const RoomModel = mongoose.model(DOCUMENT_NAME, roomSchema);

export default RoomModel;
