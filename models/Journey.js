const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itenenarySchema = new Schema({
  cityName: {
    type: String
  },
  lat: {
    type: String
  },
  long: {
    type: String
  }
});

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
  days: [itenenarySchema],
  journeyDoc: {
    type: String
  },
  lat: {
    type: String
  },
  lon: {
    type: String
  }

}, { timestamps: true });



const Journey = mongoose.model('Journey', journeySchema);

module.exports = Journey;