const express = require("express");
const {
  sendMessage,
  allMessage,
} = require("../Controllers/MessageControllers");
const { protect } = require("../Middlewares/authMiddlewares");

const router = express.Router();

router.route("/").post(protect, sendMessage);
router.route("/:chatId").get(protect, allMessage);

module.exports = router;
