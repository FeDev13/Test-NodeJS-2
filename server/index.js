const express = require("express");
const app = express();
const port = 6550;
const mongoose = require("mongoose");
const db = require("./dbConnection/mongo");


require("dotenv/config");

app.listen(port, () => {
  console.log(`servidor corriendo en el puerto ${port}`);
});
