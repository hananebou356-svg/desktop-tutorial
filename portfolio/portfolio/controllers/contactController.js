const Contact = require("../models/contact");

exports.sendMessage = async (req, res) => {
  const message = await Contact.create(req.body);
  res.status(201).json(message);
};

exports.getMessages = async (req, res) => {
  const messages = await Contact.find();
  res.json(messages);
};
