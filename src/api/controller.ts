const {
    createUserService,
    getAllUsersService,
    deleteUserService,
    getUserByEmailService,
    updateUserPasswordService,

} = require("./service");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
    createUser: (req, res) => {
        console.log("create user called")
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
        console.log("get all users called")
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
        console.log("delete user called")
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
        console.log("login route called")
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
                    user : results,
                    success: 1,
                    message: "login successfully",
                    token: JWT,
                });
            }
        });
    },
    updatePassword: (req, res) => {
        console.log("update password service called")
        const body = req.body;
        const salt = genSaltSync(10);
        body.oldPassword = hashSync(body.oldPassword, salt);

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
            const result = compareSync(body.oldPassword, results.password);
            if (result) {
                body.newPassword = hashSync(body.newPassword, salt);
                updateUserPasswordService(body.id, body.newPassword, (err, results) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({
                            success: 0,
                            message: err.message,
                        });
                    }
                    return res.status(200).json({
                        success: 1,
                        message: "password updated successfully",
                    });
                });
            }
        }
        );
    },
};
