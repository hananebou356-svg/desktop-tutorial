const router = require("express").Router();
const controller = require("../controllers/contactController");

// SEND a message (visitor)
router.post("/", controller.sendMessage);

// GET all messages (owner/dashboard)
router.get("/", controller.getMessages);

module.exports = router;
