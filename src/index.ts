import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import http from "http";
import config from "./config/config.js";
import Logging from "./library/logging.js";
import apiRouter from "./routes/auther.routes.js"

const router: Express = express();
const allowedOrigins = ["*"];

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
    // router.get("/", (req: Request, res: Response) => {
    //     res.send("Hello World");
    // });

    router.use(express.json());
    router.use(express.urlencoded({ extended: true }));
    router.use((req, res, next) => {
        Logging.event(`${req.method} [${req.originalUrl}] [${req.ip}]`);
        Logging.info(req.body);

        res.header("Access-Control-Allow-Origin", allowedOrigins);
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        );
        next();
    });

    router.get("/", (req: Request, res: Response) => {
        res.send("Hello World");
    });

    // other routes here
    router.use("/api", apiRouter);
    

    router.use((req, res) => {
        const error = new Error("Route Not found");
        Logging.error(error);
        return res.status(404).json({
            message: error.message,
        });
    });

    http.createServer(router).listen(config.server.SERVER_PORT, () => {
        Logging.log(`Server started at port ${config.server.SERVER_PORT}`);
    });
};
