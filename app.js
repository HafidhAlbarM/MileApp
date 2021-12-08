const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("./src/config/database");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const apiRoutes = require("./src/routes/api");

app.use("/api", apiRoutes);

module.exports = app;
