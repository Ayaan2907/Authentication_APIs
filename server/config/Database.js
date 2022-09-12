const mysql = require("mysql");

// Creating a pool of connections to the database
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.USR,
    password: process.env.PASSWORD,
    database: "nodejs_application",
    // database: process.env.DATABASE,
    connectionLimit: 10,
});

console.log(process.env);

module.exports = pool;
