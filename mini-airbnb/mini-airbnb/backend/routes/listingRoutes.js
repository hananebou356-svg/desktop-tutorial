const express = require("express");
const Listing = require("../models/Listing");
const multer = require("multer");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage });

// create listing
router.post("/", auth, upload.single("image"), async (req, res) => { ... });

// get all listings
router.get("/", async (req, res) => {
  const listings = await Listing.find().populate("owner", "name email");
  res.json(listings);
});

module.exports = router;
