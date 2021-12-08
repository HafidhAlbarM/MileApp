const express = require("express");
const Router = express.Router();

const transactionController = require("../../controllers/transaction");

Router.get("/", transactionController.get);
Router.get("/:id", transactionController.getById);
Router.post("/", transactionController.post);
Router.put("/:id", transactionController.put);
Router.patch("/:id", transactionController.patch);
Router.delete("/:id", transactionController.delete);

module.exports = Router;
