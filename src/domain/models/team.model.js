const mongoose = require('mongoose');
const { Schema } = mongoose;

const teamSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  logo: {
    type: String,
    required: true,
  },
  players: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Player',
    },
  ],
  captain: {
    type: Schema.Types.ObjectId,
    ref: 'Player',
  },
  coach: {
    type: Schema.Types.ObjectId,
    ref: 'Player',
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
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

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
