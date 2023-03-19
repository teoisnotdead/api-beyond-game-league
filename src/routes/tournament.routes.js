const express = require('express');
const router = express.Router();
const tournamentController = require('../controllers/tournament.controller');

router.post('/', tournamentController.createTournament);
router.put('/:id', tournamentController.updateTournament);
router.delete('/:id', tournamentController.deleteTournament);
router.get('/', tournamentController.getAllTournaments);
router.get('/:id', tournamentController.getTournamentById);

module.exports = router;
