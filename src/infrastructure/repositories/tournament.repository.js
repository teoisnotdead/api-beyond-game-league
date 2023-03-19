const mongoose = require('mongoose');
const { tournamentModel } = require('../../domain/models/tournament.model');

const Tournament = mongoose.model('Tournament', tournamentModel);

async function createTournament(tournamentData) {
    const tournament = new Tournament(tournamentData);
    await tournament.save();
    return tournament;
}

async function updateTournament(id, tournamentData) {
    const tournament = await Tournament.findByIdAndUpdate(id, tournamentData, { new: true });
    return tournament;
}

async function deleteTournament(id) {
    await Tournament.findByIdAndDelete(id);
}

module.exports = {
    createTournament,
    updateTournament,
    deleteTournament,
};
