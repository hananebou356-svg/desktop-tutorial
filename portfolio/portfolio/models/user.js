const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  about: String,
  status: String,
  phone: String,
  email: { type: String, required: true },
  github: String,
  linkedin: String
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
