const express = require("express");
const Router = express.Router();

const packageRouter = require("./package/package");

Router.use("/package", packageRouter);

module.exports = Router;
