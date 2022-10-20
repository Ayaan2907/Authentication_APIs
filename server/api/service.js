const pool = require("../config/Database");

const creteUserQuery = `INSERT INTO users ( username, email, password) VALUES (?,?,?)`;
const getAllUsersQuery = `SELECT * FROM users`;
const deleteUserQuery = `DELETE FROM users WHERE id = ?`;
const getUserByEmailQuery = `SELECT * FROM users WHERE email = ?`;
const getGpsDataQuery = `SELECT * FROM gps_data`;
const getGpsDataByIdQuery = `SELECT * FROM gps_data WHERE id = ?`;

module.exports = {
    createUserService: (body, callBack) => {
        pool.query(
            creteUserQuery,
            [body.username, body.email, body.password],
            (err, results, fields) => {
                if (err) {
                    return callBack(err);
                }
                return callBack(null, results);
            }
        );
    },
    getAllUsersService: (callBack) => {
        pool.query(getAllUsersQuery, [], (err, results, fields) => {
            if (err) {
                return callBack(err);
            }
            return callBack(null, results);
        });
    },
    deleteUserService: (id, callBack) => {
        pool.query(deleteUserQuery, [id], (err, results, fields) => {
            if (err) {
                return callBack(err);
            }
            if (results.affectedRows === 0) {
                return callBack({ message: "User not found" });
            }
            return callBack(null, results);
        });
    },
    getUserByEmailService: (email, callBack) => {
        pool.query(getUserByEmailQuery, [email], (err, results, fields) => {
            if (err) {
                return callBack(err);
            }
            return callBack(null, results[0]);
        });
    },
    getGpsDataService: (callBack) => {
        pool.query(getGpsDataQuery, [], (err, results, fields) => {
            if (err) {
                return callBack(err);
            }
            return callBack(null, results);
        });
    },
    getGpsDataByIdService: (id,callBack) => {
        pool.query(getGpsDataByIdQuery, [id], (err, results, fields) => {
            if (err) {
                return callBack(err);
            }
            return callBack(null, results);
        });
    },
};
