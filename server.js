const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const db = require('./queries.js');

app.get('/', (request, response) => {
    response.send('Welcome!');
});

app.get('/watchlist', (request, response) => {
    db.getWatchlist((error, result) => {
        if (error) {
            throw error;
        }
        response.json(result);
    });
});

app.listen(port, () => {
    console.log(`Server now listening on port ${port}...`);
});
