import express, { Express, Request, Response } from "express";
import config from "./config/config.js";
import Logging from "./library/logging.js";
import mongoose from "mongoose";

const router: Express = express();

const connectDatabase = () => {
    mongoose.set("strictQuery", false);
    mongoose
        .connect(config.dataBase.MONGO_URL, {
            retryWrites: true,
            w: "majority",
        })
        .then(() => {
            Logging.info("Connected to MongoDB");
            initServer(router);
        })
        .catch((err) => {
            Logging.error(`Error connecting to MongoDB: \n ${err}`);

            setTimeout(() => {
                Logging.warning("Reconnecting to MongoDB");
                connectDatabase();
            }, 3000);
        });
};
connectDatabase();

const initServer = (router: Express) => {
    router.get("/", (req: Request, res: Response) => {
        res.send("Hello World");
    });

    router.listen(config.server.SERVER_PORT, () => {
        Logging.log(`Server started at port ${config.server.SERVER_PORT}`);
    });
};
