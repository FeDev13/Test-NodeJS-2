const mongoose = require("mongoose");

const user = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  pass: { type: String, required: true },
  photo: { type: String, required: true },
  premium: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const User = mongoose.model("user", user);
module.exports = User;
