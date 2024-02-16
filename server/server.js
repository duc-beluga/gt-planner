import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import {connectDB} from './config/dbConn.js'

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());

const PORT = process.env.PORT || 3000;

const startServer = async() => {
    try {
        connectDB()
        app.listen(PORT, () => console.log("Server is running on port 3000"));  
    } catch(error) {
        console.log(error.message)
    }
}

startServer()
