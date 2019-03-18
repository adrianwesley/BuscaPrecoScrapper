const router = require("express").Router();
const ItemController = require("./src/controllers/itemController");

router.post("/items/:page", ItemController.index);

module.exports = router;