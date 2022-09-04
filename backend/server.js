const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("rootpath")();
require("dotenv").config();
const connection = require("_helpers/connection");
// const { connection, errorHandler, jwt } = require("./_helpers/index");
const errorHandler = require("_helpers/error-handler");

// import { getProduct, getProducts } from "./db.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

//use routes for tut
require("./blogs/blogs.routes.js")(app);
// use JWT auth to secure the api
// app.use(jwt());

// global error handler
app.use(errorHandler);
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to your blog application." });
});

//api routes
app.use("/users", require("./users/users.controller"));

// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   port: process.env.DB_HOST_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

const port = process.env.DB_PORT || 3000;
app.listen(port, (err, res) => {
  if (err) {
    console.log(err);
  }
  console.log(`App is running on port: ${port}`);
});
