const {
    createUserService,
    getAllUsersService,
    deleteUserService,
    getUserByEmailService,
    getGpsDataService,
} = require("./service");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        createUserService(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: err.message,
                });
            }
            return res.status(200).json({
                success: 1,
                data: results,
            });
        });
    },
    getAllUsers: (req, res) => {
        getAllUsersService((err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: err.message,
                });
            }
            return res.status(200).json({
                success: 1,
                data: results,
            });
        });
    },
    deleteUser: (req, res) => {
        const id = req.params.id;
        deleteUserService(id, (err, result) => {
            if (err || !result) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: err.message,
                });
            }
            return res.status(200).json({
                success: 1,
                message: "user deleted successfully",
            });
        });
    },
    logIn: (req, res) => {
        const body = req.body;
        getUserByEmailService(body.email, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: err.message,
                });
            }
            if (!results) {
                return res.status(401).json({
                    success: 0,
                    message: "Invalid email or password",
                });
            }
            const result = compareSync(body.password, results.password);
            if (result) {
                results.password = undefined; // setting this so that in the jwt token passwords should not get exposed
                const JWT = sign(
                    { result: results },
                    // process.env.API_KEY, {
                    "SampleToken@12345",
                    { expiresIn: "1h" }
                );
                return res.status(200).json({
                    success: 1,
                    message: "login successfully",
                    token: JWT,
                });
            } else {
                return res.status(401).json({
                    success: 0,
                    message: "Invalid email or password",
                });
            }
        });
    },
    getGpsData: (req, res) => {
        getGpsDataService((err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: err.message,
                });
            }
            return res.status(200).json({
                success: 1,
                data: results,
            });
        });
    }
};
