const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://mongo:mongo@cluster0.8dxtaeq.mongodb.net/?retryWrites=true&w=majority",
  () => {
    console.log("conectado a mongo");
  }
);
