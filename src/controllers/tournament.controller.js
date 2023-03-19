const tournamentService = require('../domain/services/tournament.service');

async function createTournament(req, res, next) {
    try {
        const tournament = await tournamentService.createTournament(req.body);
        if (!req.body.name || !req.body.startDate || !req.body.endDate || !req.body.prizePool || !req.body.logo) {
            return res.status(400).send({ message: 'Name, startDate, endDate, prizePool and logo are required' });
        }
        res.status(201).json(tournament);
    } catch (err) {
        next(err);
    }
}

async function updateTournament(req, res, next) {
    try {
        const tournament = await tournamentService.updateTournament(req.params.id, req.body);
        if (!tournament) {
            return res.status(404).send({ message: 'Tournament not found' });
        }
        res.status(200).json(tournament);
    } catch (err) {
        next(err);
    }
}

async function deleteTournament(req, res, next) {
    try {
        const tournament = await tournamentService.deleteTournament(req.params.id);
        if (!tournament) {
            return res.status(404).send({ message: 'Tournament not found' });
        }
        res.status(200).send({ message: 'Tournament deleted successfully' });
    } catch (err) {
        next(err);
    }
}

async function getAllTournaments(req, res, next) {
    try {
        const tournaments = await tournamentService.getAllTournaments();
        res.status(200).json(tournaments);
    } catch (err) {
        next(err);
    }
}

async function getTournamentById(req, res, next) {
    try {
        const tournament = await tournamentService.getTournamentById(req.params.id);
        if (!tournament) {
            return res.status(404).send({ message: 'Tournament not found' });
        }
        res.status(200).json(tournament);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    createTournament,
    updateTournament,
    deleteTournament,
    getAllTournaments,
    getTournamentById
};
