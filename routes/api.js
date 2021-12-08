const express = require("express");
const Router = express.Router();

const transactionRouter = require("./transaction/transaction");

Router.use("/transaction", transactionRouter);

module.exports = Router;
