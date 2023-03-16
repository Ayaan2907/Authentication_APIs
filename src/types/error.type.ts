import Logging from "../library/logging.js";
import { Response } from "express";

const commonErrorActions = {
    missingFields: (res: Response) => {
        const error = new Error("Missing Fields");
        Logging.error(error);
        return res.status(400).json({ error: error });
    },
    Unauthorized: (res: Response) => {
        const error = new Error("Unauthorized");
        Logging.error(error);
        return res.status(401).json({ error: error });
    },

    emptyResponse: (res: Response) => {
        const error = new Error("Not found");
        Logging.error(error);
        return res.status(404).json({ error: error });
    },

    invalid: (res: Response) => {
        const error = new Error("Invalid");
        Logging.error(error);
        return res.status(400).json({ error: error });
    },
    other: (res: Response, error: Error | unknown) => {
        Logging.error(error);
        return res.status(500).json({ error: error });
    },
};

export default commonErrorActions;
