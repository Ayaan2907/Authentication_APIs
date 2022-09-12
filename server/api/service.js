const pool = require("../config/Database");

const creteUserQuery = `INSERT INTO users ( username, email, password) VALUES (?,?,?)`;
const getAllUsersQuery = `SELECT * FROM users`;
const deleteUserQuery = `DELETE FROM users WHERE id = ?`;
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
            return callBack(null, results);
        });
    },
};
