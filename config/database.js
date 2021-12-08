const mongoose = require("mongoose");
require("dotenv").config();

const dbURI = process.env.DB_CONNECTION;
mongoose.connect(dbURI, () => {
  console.log("terkoneksi ke database");
});
