const router = require("express").Router();
const controller = require("../controllers/skillController");

// CREATE skill
router.post("/", controller.createSkill);

// READ all skills
router.get("/", controller.getSkills);

// UPDATE skill by id
router.put("/:id", controller.updateSkill);

// DELETE skill by id
router.delete("/:id", controller.deleteSkill);

module.exports = router;
