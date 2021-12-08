const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
require("./config/database");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const apiRoutes = require("./routes/api");

app.use("/api", apiRoutes);

app.listen(process.env.PORT, () => {
  console.log(`berjalan di port ${process.env.PORT}`);
});
