const {
    createUserService,
    getAllUsersService,
    deleteUserService,
} = require("./service");
// const { hashSync, genSaltSync } = require("bcrypt");

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        // const salt = genSaltSync(10);
        // body.password = hashSync(body.password, salt);
        console.log(body);
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
};
