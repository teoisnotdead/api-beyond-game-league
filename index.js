const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1
    style="display: flex; justify-content: center; align-items: center; width: 100%; min-height: 100vh; margin: 0; padding: 0; font-size: 7rem;">
    App Beyond Game League Server</h1>`);
});

app.get("/teo", (req, res) => {
  res.send(
    {
      "data": {
        "previousMatches": [
          {
            "date": "Fecha 4",
            "matchs": [
              {
                "id": 1,
                "team1": "team1",
                "team2": "team2",
                "score1": 13,
                "score2": 14,
                "winner": "team2"
              },
              {
                "id": 2,
                "team1": "team3",
                "team2": "team4",
                "score1": 9,
                "score2": 13,
                "winner": "team4"
              },
              {
                "id": 3,
                "team1": "team5",
                "team2": "team6",
                "score1": 13,
                "score2": 6,
                "winner": "team6"
              }
            ]
          }
        ],
        "nextMatches": [
          {
            "date": "Fecha 5",
            "matchs": [
              {
                "id": 1,
                "team1": "team1",
                "team2": "team3"
              },
              {
                "id": 2,
                "team1": "team2",
                "team2": "team4"
              },
              {
                "id": 3,
                "team1": "team5",
                "team2": "team6"
              }
            ]
          }
        ]
      }
    }
  );
});

app.get('*', (req, res) => {
  res.status(404).send(`<h1
        style="display: flex; justify-content: center; align-items: center; width: 100%; min-height: 100vh; margin: 0; padding: 0; font-size: 7rem;">
        404 Not Found</h1>`);
});

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}!`));