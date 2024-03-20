import mongoose from 'mongoose';

const DOCUMENT_NAME = 'DormFloor';
const COLLECTION_NAME = 'DormFloors';

const domrFloorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    floorNumber:{
      type: String,
      required: true,
    },
    numberRoom:{
      type: Number,
      required: true,
    },
    dorm: {
        type: mongoose.Types.ObjectId,
        ref:"Dormitories"
    },
  },
  { timestamps: true, collection: COLLECTION_NAME }
);

const DormFloorModel = mongoose.model(COLLECTION_NAME, domrFloorSchema);

export default DormFloorModel;
