const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/ecommerce")
  .then(() => console.log("✅ MongoDB connecté"))
  .catch(err => console.error("❌ Erreur MongoDB", err));

app.listen(3000, () => {
  console.log("🚀 Serveur démarré sur le port 3000");
});
const User = require("./Models/User");
const Product = require("./Models/Product");

// créer user
app.get("/users", async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});


app.get("/products", async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// créer product
app.post("/user/create", async (req, res) => {
  try {
    const product = await User.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
