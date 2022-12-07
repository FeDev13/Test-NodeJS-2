const router = require("express").Router();
const handler = require("../controllers/userController");
const modifyMulter = require("../config/multer");

router.post("/", handler.add);
router.patch("/:id", modifyMulter.single(img), handler.upgradeUsuario);
