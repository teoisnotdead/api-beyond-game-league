const teamService = require('../domain/services/team.service');

async function createTeam(req, res, next) {
    try {
        const team = await teamService.createTeam(req.body);
        if (!req.body.name || !req.body.logo) {
            return res.status(400).send({ message: 'Name and logo are required' });
        }
        res.status(201).json(team);
    } catch (err) {
        next(err);
    }
}

async function updateTeam(req, res, next) {
    try {
        const team = await teamService.updateTeam(req.params.id, req.body);
        if (!team) {
            return res.status(404).send({ message: 'Team not found' });
        }
        res.status(200).json(team);
    } catch (err) {
        next(err);
    }
}

async function deleteTeam(req, res, next) {
    try {
        const team = await teamService.deleteTeam(req.params.id);
        if (!team) {
            return res.status(404).send({ message: 'Team not found' });
        }
        res.status(200).send({ message: 'Team deleted successfully' });
    } catch (err) {
        next(err);
    }
}

async function getAllTeams(req, res, next) {
    try {
        const teams = await teamService.getAllTeams();
        res.status(200).json(teams);
    } catch (err) {
        next(err);
    }
}

async function getTeamById(req, res, next) {
    try {
        const team = await teamService.getTeamById(req.params.id);
        if (!team) {
            return res.status(404).send({ message: 'Team not found' });
        }
        res.status(200).json(team);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    createTeam,
    updateTeam,
    deleteTeam,
    getAllTeams,
    getTeamById
};
