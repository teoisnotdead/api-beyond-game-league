const mongoose = require('mongoose');
const { Schema } = mongoose;

const tournamentSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  prizePool: {
    type: Number,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Tournament = mongoose.model('Tournament', tournamentSchema);

module.exports = Tournament;
