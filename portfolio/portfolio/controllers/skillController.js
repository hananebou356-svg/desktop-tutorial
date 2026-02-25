const Skill = require("../models/skill");

exports.createSkill = async (req, res) => {
  const skill = await Skill.create(req.body);
  res.status(201).json(skill);
};

exports.getSkills = async (req, res) => {
  const skills = await Skill.find();
  res.json(skills);
};

exports.updateSkill = async (req, res) => {
  const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(skill);
};

exports.deleteSkill = async (req, res) => {
  await Skill.findByIdAndDelete(req.params.id);
  res.json({ message: "Skill supprimé" });
};
