const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (request, response) => {
    response.send('Welcome!');
});

app.get('/watchlist', (request, response) => {
    response.json({
        id: 1,
        title: 'Tommy Boy',
        posterUrl: 'https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'
    });
});

app.listen(port, () => {
    console.log(`Server now listening on port ${port}...`);
});
