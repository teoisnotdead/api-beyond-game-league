const express = require('express');
const router = express.Router();
const playerController = require('../controllers/player.controller');

router.post('/', playerController.createPlayer);
router.put('/:id', playerController.updatePlayer);
router.delete('/:id', playerController.deletePlayer);
router.get('/', playerController.getAllPlayers);
router.get('/:id', playerController.getPlayerById);

module.exports = router;
