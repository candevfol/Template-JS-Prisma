import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`);
})