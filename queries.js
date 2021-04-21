const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    database: 'showtime',
    port: 5432
});

const getWatchlist = (callback) => {
    pool.query('SELECT * FROM movies', (error, results) => {
        if (error) {
            callback(error);
        }
        callback(undefined, results.rows);
    });
};

module.exports = {
    getWatchlist
};
