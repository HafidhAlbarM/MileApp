const express = require("express");
const Router = express.Router();

const packageController = require("../../controllers/package");

Router.get("/", packageController.get);
Router.get("/:id", packageController.getById);
Router.post("/", packageController.post);
Router.put("/:id", packageController.put);
Router.patch("/:id", packageController.patch);
Router.delete("/:id", packageController.delete);

module.exports = Router;
