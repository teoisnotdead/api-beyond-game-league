const mongoose = require('mongoose');
const { Schema } = mongoose;

const playerSchema = new Schema({
  nickname: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    trim: true,
  },
  country: {
    type: String,
  },
  age: {
    type: Number,
  },
  team: {
    type: String,
  },
  gameIds: [
    {
      riotId: {
        type: String,
      },
      steamId: {
        type: String,
      },
      epicId: {
        type: String,
      },
      battlenetId: {
        type: String,
      },
    },
  ],
  socialMedia: [
    {
      twitter: {
        type: String,
      },
      discord: {
        type: String,
      },
      twitch: {
        type: String,
      },
      youtube: {
        type: String,
      },
      instagram: {
        type: String,
      },
      }
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
