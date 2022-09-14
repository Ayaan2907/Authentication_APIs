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
pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === "PROTOCOL_CONNECTION_LOST") {
            console.error("Database connection was closed.");
        }
        if (err.code === "ER_CON_COUNT_ERROR") {
            console.error("Database has too many connections.");
        }
        if (err.code === "ECONNREFUSED") {
            console.error("Database connection was refused.");
        }
    }
    if (connection) connection.release();
    console.log(`Database connected at ${process.env.DB_HOST}:${process.env.DB_PORT}`)
    return;
});

module.exports = pool;
