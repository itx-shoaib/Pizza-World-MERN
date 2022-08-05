// Making server by first importing express in express variable.
const express = require("express");
const { config } = require("process");

const db = require('./db.js')

const app = express();
app.use(express.json())

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Node server started by using nodemon"))