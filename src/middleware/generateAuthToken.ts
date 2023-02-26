import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { User } from "../types/user.type.js";
import Logging from "../library/logging.js";
import UserInstance from "../models/user.model.js";
import config from "../config/config.js";

const generateAuthToken = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
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

export default generateAuthToken;
