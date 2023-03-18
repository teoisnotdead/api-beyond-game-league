const mongoose = require('mongoose');
const { teamModel } = require('../../domain/models/team.model');

const Team = mongoose.model('Team', teamModel);

async function createTeam(teamData) {
    const team = new Team(teamData);
    await team.save();
    return team;
}

async function updateTeam(id, teamData) {
    const team = await Team.findByIdAndUpdate(id, teamData, { new: true });
    return team;
}

async function deleteTeam(id) {
    await Team.findByIdAndDelete(id);
}

module.exports = {
    createTeam,
    updateTeam,
    deleteTeam,
};
