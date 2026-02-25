const express = require("express");
const router = express.Router();

const {
  createSkill,
  getAllSkills,
  getSkillById,
  updateSkill,
  deleteSkill,
} = require("../controllers/skillCotroller");

// CRUD Routes
router.post("/", createSkill);
router.get("/", getAllSkills);
router.get("/:id", getSkillById);
router.put("/:id", updateSkill);
router.delete("/:id", deleteSkill);

module.exports = router;


