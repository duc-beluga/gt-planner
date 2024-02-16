import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import {connectDB} from './config/dbConn.js'

import userRouter from './routes/userRoutes.js'

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());

app.use('/api/user', userRouter)
app.get('/', (req,res) => {
    res.send('GET HomePage')
})


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
