import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import userCollection from "../models/user.model.js";
import commonErrorActions from "../types/error.type.js";
import Logging from "../library/logging.js";
import { IUser } from "../types/user.type.js";
import config from "../config/config.js";
import jwt from "jsonwebtoken";

const createUser = async (req: Request, res: Response) => {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
        return commonErrorActions.missingFields(res);
    }

    bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
            commonErrorActions.other(res, err);
        } else {
            const user = new userCollection({
                _id: new mongoose.Types.ObjectId(),
                name,
                email,
                password: hash,
                role,
            });
            try {
                await user.save();
                Logging.info(`User ${user.name} created`);
                res.status(201).send({ user });
            } catch (error) {
                commonErrorActions.other(res, error);
            }
        }
    });
};
const getUser = async (req: Request, res: Response, next: NextFunction) => {
    const { id, email } = req.params;

    if (!id && !email) {
        return commonErrorActions.missingFields(res);
    }
    try {
        const user = await (!email
            ? userCollection.findById(id)
            : userCollection.findOne({ email }));

        if (!user) {
            return commonErrorActions.emptyResponse(res);
        }

        Logging.info(`User ${user.name} found`);
        res.status(200).send({ user });
    } catch (error) {
        commonErrorActions.other(res, error);
    }
};
const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await userCollection.find();
        Logging.info(users);
        res.status(200).send({ users });
    } catch (error) {
        commonErrorActions.other(res, error);
    }
};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return commonErrorActions.missingFields(res);
    }

    try {
        const user: IUser | null = await userCollection.findOne({ email });

        if (!user) {
            return commonErrorActions.emptyResponse(res);
        }

        // comparing the passwords and generating token
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                return commonErrorActions.other(res, err);
            }
            if (result) {
                const token = jwt.sign(
                    {
                        _id: user.id,
                        name: user.name,
                        email: user.email,
                        role: user.role,
                    },
                    config.jwt.JWT_SECRET,
                    {
                        expiresIn: config.jwt.JWT_EXPIRY_TIME,
                    }
                );
                // res.header("x-auth-token").status(200).send({ token });
                // res.status(200).send({ token });

                // setting the token in the header for next requests
                Logging.event(`Token generated for user: ${user.name}`);
                res.set("Authorization", `Bearer ${token}`)
                    .status(200)
                    .send({ token });
                next();
            } else {
                commonErrorActions.Unauthorized(res);
            }
        });
    } catch (error) {
        commonErrorActions.other(res, error);
    }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    // TODO
    console.log(req);
    Logging.event("Update user");

    res.send("Update user");
};
const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    // todo
    Logging.event("Delete user");

    res.send("Delete user");
};

export default {
    createUser,
    getUser,
    getAllUsers,
    loginUser,
    updateUser,
    deleteUser,
};
