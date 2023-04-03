import mongoose from "mongoose";
import express from "express";
import productRouter from './router/product';
import authorRouter from "./router/author";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', productRouter);
app.use('/api', authorRouter)

mongoose.connect('mongodb://127.0.0.1:27017/Testnodeyou')
    .then(() => console.log("db connected")).catch(error => console.log(error))


// app.listen(process.env.PORT, () => {
//     console.log("Đang chạy trên 8080");
// });

export const viteNodeApp = app;