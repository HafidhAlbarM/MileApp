const express = require("express");
const Router = express.Router();

const transactionController = require("../../controllers/transaction");

Router.get("/", transactionController.get);
Router.get("/:id", transactionController.getById);
Router.post("/", transactionController.post);

module.exports = Router;
