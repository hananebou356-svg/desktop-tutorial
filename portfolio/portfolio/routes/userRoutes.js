const router = require("express").Router();
const controller = require("../controllers/userController");

// GET infos personnelles
router.get("/", controller.getUser);

// POST create or update user
router.post("/", controller.createOrUpdateUser);

module.exports = router;
