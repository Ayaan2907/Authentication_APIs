import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import userCollection from "../models/user.model.js";
import commonErrorActions from "../types/error.type.js";
import generateAuthToken from "../middleware/generateAuthToken.js";
import Logging from "../library/logging.js";
import { IUser } from "../types/user.type.js";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
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
                next(loginUser); //FIXME: is it correct or not check
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

    if (!mongoose.isValidObjectId(email)) {
        return commonErrorActions.invalid(res);
    }

    try {
        const user: IUser | null = await userCollection.findOne({ email });

        if (!user) {
            return commonErrorActions.emptyResponse(res);
        }
        bcrypt.compare(password, user.password).then((result) => {
            if (result) {
                const token = generateAuthToken(user, res);
                Logging.info(`User ${user.name} logged in`);
                res.header("x-auth-token").status(200).send({ token });
        // res.header("x-auth-token", token).json({ token });

            } else {
                commonErrorActions.Unauthorized(res);
            }
        });
    } catch (error) {
        commonErrorActions.other(res, error);
    }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    // todo
};
const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    // todo
};

export default {
    createUser,
    getUser,
    getAllUsers,
    loginUser,
    updateUser,
    deleteUser,
};
