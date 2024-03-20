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
    roomNumber: {
      type: Number,
      required: true,
    },
    gender: {
      type: Number,
      required: true,
    },
    roomType: {
      type: mongoose.Types.ObjectId,
      ref: 'RoomTypes',
    },
    dormFloor: {
      type: mongoose.Types.ObjectId,
      ref: 'DormFloors',
    },
    dormitory: {
      type: mongoose.Types.ObjectId,
      ref: 'Dormitories',
    },
    beds: [{
      type: mongoose.Types.ObjectId,
      ref: 'Beds',
    }],
    history_electric_warter: {
      type: mongoose.Types.ObjectId,
      ref: 'HistoryBillEWDetails',
    },
    furniture: [
      {
        _id: {
          type: mongoose.Types.ObjectId,
        },
        name: {
          type: String,
          trim: true,
        },
        quantity: {
          type: Number,
        },
      },
    ]
  },
  { timestamps: true, collection: COLLECTION_NAME }
);

const RoomModel = mongoose.model(DOCUMENT_NAME, roomSchema);

export default RoomModel;
