import { Response } from "express";
import jwt from "jsonwebtoken";
import { IUser } from "../types/user.type.js";
import Logging from "../library/logging.js";
import config from "../config/config.js";
import commonErrorActions from "../types/error.type.js";

const generateAuthToken = async (user: IUser, res: Response) => {
    try {
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
        Logging.event(`Token generated for user: ${user.name}`);
        return token;
    } catch (error) {
        commonErrorActions.other(res, error);
    }
};

export default generateAuthToken;
