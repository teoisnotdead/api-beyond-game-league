const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const teamRoutes = require('./routes/team.routes');
// const tournamentRoutes = require('./routes/tournament.routes');
// const playerRoutes = require('./routes/player.routes');

const app = express();

mongoose.connect(config.dbUrl);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/teams', teamRoutes);
// app.use('/api/tournaments', tournamentRoutes);
// app.use('/api/players', playerRoutes);

app.get("/", (req, res) => {
  res.send(`<h1
    style="display: flex; justify-content: center; align-items: center; width: 100%; min-height: 100vh; margin: 0; padding: 0; font-size: 7rem;">
    App Beyond Game League Server</h1>`);
});
app.get('*', (req, res) => {
  res.status(404).send(`<h1
        style="display: flex; justify-content: center; align-items: center; width: 100%; min-height: 100vh; margin: 0; padding: 0; font-size: 7rem;">
        404 Not Found</h1>`);
});

app.listen(config.port, () => {
  console.log(`Server listening at http://localhost:${config.port}`);
});
