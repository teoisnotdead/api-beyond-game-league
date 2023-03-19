const playerService = require('../domain/services/player.service');

async function createPlayer(req, res, next) {
    try {
        const player = await playerService.createPlayer(req.body);
        if (!req.body.nickname) {
            return res.status(400).send({ message: 'Nickname are required' });
        }
        if (req.body.nickname.length < 3 || req.body.nickname.length > 20) {
            return res.status(400).send({ message: 'Nickname must be between 3 and 20 characters' });
        }
        res.status(201).json(player);
    } catch (err) {
        next(err);
    }
}

async function updatePlayer(req, res, next) {
    try {
        const player = await playerService.updatePlayer(req.params.id, req.body);
        if (!player) {
            return res.status(404).send({ message: 'Player not found' });
        }
        res.status(200).json(player);
    } catch (err) {
        next(err);
    }
}

async function deletePlayer(req, res, next) {
    try {
        const player = await playerService.deletePlayer(req.params.id);
        if (!player) {
            return res.status(404).send({ message: 'Player not found' });
        }
        res.status(200).send({ message: 'Player deleted successfully' });
    } catch (err) {
        next(err);
    }
}

async function getAllPlayers(req, res, next) {
    try {
        const players = await playerService.getAllPlayers();
        res.status(200).json(players);
    } catch (err) {
        next(err);
    }
}

async function getPlayerById(req, res, next) {
    try {
        const player = await playerService.getPlayerById(req.params.id);
        if (!player) {
            return res.status(404).send({ message: 'Player not found' });
        }
        res.status(200).json(player);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    createPlayer,
    updatePlayer,
    deletePlayer,
    getAllPlayers,
    getPlayerById
};
