const mongoose = require('mongoose');

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
    room_type: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "RoomType",
    }
  },
  { timestamps: true }
);

const roomModel = mongoose.model('room', roomSchema);

module.exports = roomModel;
