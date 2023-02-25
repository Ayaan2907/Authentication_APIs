import dotenv from "dotenv";

dotenv.config();

const MONGO_USERNAME: string = process.env.MONGO_USERNAME || "";
const MONGO_PASSWORD: string = process.env.MONGO_PASSWORD || "";
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@users.wq7vfck.mongodb.net/`;

const SERVER_PORT: string = process.env.SERVER_PORT || "8000";
const SERVER_HOSTNAME: string = process.env.SERVER_HOSTNAME || "localhost";

const LOGGING_FLAG: boolean = process.env.LOGGING_FLAG === "true" || false;

const config = {
    dataBase: {
        MONGO_URL,
    },
    server: {
        SERVER_PORT,
        SERVER_HOSTNAME,
    },
    logging: LOGGING_FLAG,
};

export default config;