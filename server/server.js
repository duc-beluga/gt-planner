import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import path from "path";
// import { fileURLToPath } from "url";

import { connectDB } from "./config/dbConn.js";
import userRouter from "./routes/userRoutes.js";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());

app.use("/api/user", userRouter);

// app.use(express.static(path.join(__dirname, "dist")));

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    connectDB();
    app.listen(PORT, () => console.log("Server is running on port 3000"));
  } catch (error) {
    console.log(error.message);
  }
};

startServer();
