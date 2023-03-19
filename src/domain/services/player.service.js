const Player = require('../models/player.model');

function createPlayer(playerData) {
  const newPlayer = new Player(playerData);
  return newPlayer.save();
}

function updatePlayer(id, playerData) {
  return Player.findByIdAndUpdate(id, playerData, { new: true }).exec();
}

function deletePlayer(id) {
  return Player.findByIdAndDelete(id).exec();
}

function getAllPlayers() {
  return Player.find().exec();
}

function getPlayerById(id) {
  return Player.findById(id).exec();
}

module.exports = {
  createPlayer,
  updatePlayer,
  deletePlayer,
  getAllPlayers,
  getPlayerById
};