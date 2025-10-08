import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import healthRouter from "./src/controller/health.router.js";
import { errorHandler } from "./src/middleware/errorHandler.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/health", healthRouter);

app.use(errorHandler);

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`);
})