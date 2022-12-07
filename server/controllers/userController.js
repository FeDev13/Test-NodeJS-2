const User = require("../models/user");

async function add(req, res) {
  const usuario = new User({
    username: req.body.username,
    email: req.body.email,
    pass: req.body.pass,
    photo: req.body.photo,
  });
  try {
    const newUsuario = await usuario.save();
    res.status(201).json({ newUser: newUsuario });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function upgradeUsuario(req, res) {
  const id = req.params.id;
  try {
    await User.updateOne({ _id: id }, { premium: true });
  } catch {
    res.status(400).json({ message: err.message });
  }
}
module.exports = { add, upgradeUsuario };
