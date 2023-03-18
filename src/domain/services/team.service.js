const Team = require('../models/team.model');

function createTeam(teamData) {
  const newTeam = new Team(teamData);
  return newTeam.save();
}

function updateTeam(id, teamData) {
  return Team.findByIdAndUpdate(id, teamData, { new: true }).exec();
}

function deleteTeam(id) {
  return Team.findByIdAndDelete(id).exec();
}

function getAllTeams() {
  return Team.find().exec();
}

function getTeamById(id) {
  return Team.findById(id).exec();
}

module.exports = {
  createTeam,
  updateTeam,
  deleteTeam,
  getAllTeams,
  getTeamById
};
