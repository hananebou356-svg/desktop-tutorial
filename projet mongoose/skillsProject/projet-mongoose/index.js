const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const skillRoutes = require("./routes/skillRoutes");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/skills", skillRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connecté"))
  .catch((err) => console.error("❌ Erreur MongoDB", err));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Serveur lancé sur le port ${PORT}`)
);
