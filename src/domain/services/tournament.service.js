const Tournament = require('../models/tournament.model');

function createTournament(tournamentData) {
  const newTournament = new Tournament(tournamentData);
  return newTournament.save();
}

function updateTournament(id, tournamentData) {
  return Tournament.findByIdAndUpdate(id, tournamentData, { new: true }).exec();
}

function deleteTournament(id) {
  return Tournament.findByIdAndDelete(id).exec();
}

function getAllTournaments() {
  return Tournament.find().exec();
}

function getTournamentById(id) {
  return Tournament.findById(id).exec();
}

module.exports = {
  createTournament,
  updateTournament,
  deleteTournament,
  getAllTournaments,
  getTournamentById
};
