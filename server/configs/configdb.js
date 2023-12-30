require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    // user: 'postgres',
    // host: 'localhost',
    // database: 'Sales Website',
    // password: '123456',
    // port: 5432,
});
pool.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = pool;