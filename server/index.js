import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
//importing the routes posts
import postRoutes from "./routes/posts.js";

//inicialize the app with a function
const app = express();
//settin up  the starting path for the routes in postjs

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());



const CONNECTION_URL =
  "mongodb+srv://Karla:karla123@cluster0.qug8bcu.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3000;
console.log('server running on port : ${PORT}')

//connect database first a parameter and then a object with options

//connecting the data base
// https://www.mongodb.com/cloud/atlas
