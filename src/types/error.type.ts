import Logging from "../library/logging.js";
import { Response } from "express";

const commonErrorActions = {
    missingFields: (res: Response) => {
        Logging.warning("Missing fields");
        return res.status(400).json({ error: "Missing fields" });
    },
    Unauthorized: (res: Response) => {
        Logging.warning("Unauthorized");
        return res.status(401).json({ error: "Unauthorized" });
    },

    emptyResponse: (res: Response) => {
        Logging.warning("Not found");
        return res.status(404).json({ error: "Not found" });
    },

    invalid: (res: Response) => {
        Logging.warning("Invalid ");
        return res.status(400).json({ error: "Invalid " });
    },
    other: (res: Response, error: Error | unknown) => {
        Logging.error(error);
        return res.status(500).json({ error: error });
    },
};

export default commonErrorActions;
