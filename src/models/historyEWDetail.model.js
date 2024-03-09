const mongoose = require('mongoose');

const historyEWDetailSchema = new mongoose.Schema(
  {
    room: {
      _id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'room',
      },
      name: {
        type: String,
      },
    },
    new_electric: {
      type: Number,
      required: true,
    },
    old_electric: {
      type: Number,
      required: true,
    },
    new_water: {
      type: Number,
      required: true,
    },
    old_water: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const historyBillEWModel = mongoose.model('historyEWDetailS', historyBillEWSchema);

module.exports = historyEWDetailSchema;
