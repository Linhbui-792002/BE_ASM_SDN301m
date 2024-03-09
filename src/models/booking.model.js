const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'users',
    },
    bed: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'bed',
    },
    status: {
      type: String,
      required: true,
      enum: ['Pending', 'Success', 'Reject'],
      defalt:'Pending',
    },
  },
  { timestamps: true }
);

const bookingModel = mongoose.model('booking', bookingSchema);

module.exports = bookingModel;
