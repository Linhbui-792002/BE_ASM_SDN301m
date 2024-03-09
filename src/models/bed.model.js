const mongoose = require('mongoose');

const bedSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      trim: true,
    },
    room: {
      _id: {
        type: mongoose.Types.ObjectId,
        ref: 'room',
      },
      status: {
        type: String,
        required: true,
        trim: true,
      }
    },
    price: {
      type: Number,
      required: true,
    },
    number_water: {
      type: Number,
      required: true,
    },
    number_electric: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const bedModel = mongoose.model('bed', bedSchema);

module.exports = bedModel;
