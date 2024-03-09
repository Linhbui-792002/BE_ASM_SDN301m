const mongoose = require('mongoose');

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
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'roomTypeSchema',
    },
    dormitory: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Dormitories',
    },
    history_electric_warter: {
      type: mongoose.SchemaTypes.ObjectId,
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
          type: mongoose.SchemaTypes.ObjectId,
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
    ],
    status: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

const roomModel = mongoose.model('room', roomSchema);

module.exports = roomModel;
