const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const journeySchema = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  startDate: {
    type: String
  },
  endDate: {
    type: String
  },
  duration: {
    type: Number
  },
  cost: {
    type: Number
  },
  start: {
    type: String
  },
  destination: {
    type: String
  },
  isItenenaryDocument: {
    type: Boolean
  },
  days: {
    type: Array
  },
  journeyDoc: {
    type: String
  }

}, { timestamps: true });

const Journey = mongoose.model('Journey', journeySchema);

module.exports = Journey;