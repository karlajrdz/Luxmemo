const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
// import bodyParser from "body-parser";
//importing the routes posts
const mongoString = process.env.CONNECTION_URL
mongoose.connect(mongoString);
const database = mongoose.connection;

// verificar que ha conectado correctamente
database.on("error", (error) => {
  console.log(error);
});
database.once("connected", () => {
  console.log("Successfully Connected!");
});
//inicialize the app with a function
const app = express();
//settin up  the starting path for the routes in postjs

// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.json());
app.use(cors());
const postRoutes = require("./routes/posts.js");
app.use("/posts", postRoutes);

const PORT = process.env.PORT || 9000;
console.log(`server running on port: ${PORT}`);

//connect database first a parameter and then a object with options

//connecting the data base
// https://www.mongodb.com/cloud/atlas
