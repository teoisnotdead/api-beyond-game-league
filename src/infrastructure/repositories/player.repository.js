const mongoose = require('mongoose');
const { playerModel } = require('../../domain/models/player.model');

const Player = mongoose.model('Player', playerModel);

async function createPlayer(playerData) {
    const player = new Player(playerData);
    await player.save();
    return player;
}

async function updatePlayer(id, playerData) {
    const player = await Player.findByIdAndUpdate(id, playerData, { new: true });
    console.log(player);
    return player;
}

async function deletePlayer(id) {
    await Player.findByIdAndDelete(id);
}

module.exports = {
    createPlayer,
    updatePlayer,
    deletePlayer,
};
