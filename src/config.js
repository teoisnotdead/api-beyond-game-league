const config = {
    port: process.env.PORT || 3000,
    dbUrl: process.env.DB_URL || 
    'mongodb+srv://730teo:teo730@animeapp.b2odxts.mongodb.net/beyond-game-app?retryWrites=true&w=majority',
}

module.exports = config;