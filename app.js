// import file
import bodyParser from "body-parser";
import cors from "cors";
import dotEnv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import examRouters from "./routes/examRoutes.js";
import quetionRouters from "./routes/questionRoutes.js";
import errorHandler from "./utils/errorHandler.js";

// connected the mongodb
connectDB();

const app = express();

dotEnv.config();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Route
app.use("/api/question", quetionRouters);
app.use("/api/exam", examRouters);

// global error handeling
app.use(errorHandler);

// start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listen: http://localhost:${port}`);
});
