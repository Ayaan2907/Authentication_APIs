import express, { Express, Request, Response } from "express";
import config from "./config/config.js";
import mongoose from "mongoose";

const router: Express = express();

mongoose.set("strictQuery", false)
mongoose
    .connect(config.dataBase.MONGO_URL, {
        retryWrites: true,
        w: "majority",
    
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB", err);
    });
    
router.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});

router.listen(config.server.SERVER_PORT, () => {
    console.log(`Server started at port ${config.server.SERVER_PORT}`);
});
