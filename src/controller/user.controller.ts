import { Express, Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import UserInstance from "../models/user.model.js";
import { User } from "../types/user.type";
import Logging from "../library/logging.js";
import bcrypt from "bcrypt";

const createUser = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        Logging.warning("Missing fields");
        return res.status(400).json({ error: "Missing fields" });
    }  

    bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
            Logging.error(err);
            res.status(500).json({ error: err });
        } else {
            const user = new UserInstance({
                _id: new mongoose.Types.ObjectId(),
                name,
                email,
                password: hash,
            });

            try {
                await user.save();
                Logging.info(`User ${user.name} created`);
                res.status(201).json({ user });
            } catch (error) {
                Logging.error(error);
                res.status(500).json({ error });
            }
        }
    });
};
const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
        Logging.warning("Missing fields");
        return res.status(400).json({ error: "Missing fields" });
    }
    try {
        const user = await UserInstance.findById(id);
        if (!user) {
            Logging.warning("User not found");
            return res.status(404).json({ error: "User not found" });
        }
        Logging.info(`User ${user.name} found`);
        res.status(200).json({ user });
    } catch (error) {
        Logging.error(error);
        res.status(500).json({ error });
    }
};
const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await UserInstance.find();
        Logging.info(users);
        res.status(200).json({ users });
    } catch (error) {
        Logging.error(error);
        res.status(500).json({ error });
    }
};

const updateUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // todo
};
const deleteUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // todo

};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {

     // const { email, password } = req.body;
    // if (!email || !password) {
    //     Logging.warning("Missing fields");
    //     return res.status(400).json({ error: "Missing fields" });
    // }
    // try {
    //     // if (!mongoose.isValidObjectId(email)) {
    //     //     Logging.warning("Invalid email");
    //     //     return res.status(400).json({ error: "Invalid email" });
    //     // }

    //     await UserInstance.findOne({ email }, (err: Error, user: User) => {
    //         if (err) {
    //             Logging.error(err);
    //             return res.status(500).json({ error: err });
    //         }
    //         if (!user) {
    //             Logging.warning("User not found");
    //             return res.status(404).json({ error: "User not found" });
    //         }
    //         bcrypt.compare(password, user.password, (err, isPasswordValid) => {
    //             if (err) {
    //                 Logging.error(err);
    //                 return res.status(500).json({ error: err });
    //             }
    //             if (!isPasswordValid) {
    //                 Logging.warning("Invalid password");
    //                 return res.status(400).json({ error: "Invalid password" });
    //             }
    //             Logging.event(`user.name: ${user.name} logged in`);

    //             const token = jwt.sign(
    //                 { _id: user.id, email: user.email },
    //                 config.jwt.JWT_SECRET,
    //                 {
    //                     expiresIn: "1h",
    //                 }
    //             );
    //             Logging.event(`Token generated for user: ${user.name}`);
    //             res.header("x-auth-token", token).json({ token });

    //             next();
    //         });
    //     });
    // } catch (error) {
    //     Logging.error(error);
    //     res.status(500).json({ error });
    // }
};

export default {
    createUser,
    getUser,
    updateUser,
    deleteUser,
    getAllUsers,
    // loginUser,
};
