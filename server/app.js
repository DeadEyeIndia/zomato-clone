const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// import routes

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// use routes

module.exports = app;
