const express = require("express");
const Booking = require("../models/Booking");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", auth, async (req, res) => {
  const booking = await Booking.create({
    user: req.user.id,
    listing: req.body.listingId
  });
  res.json(booking);
});

router.get("/mine", auth, async (req, res) => {
  const bookings = await Booking.find({ user: req.user.id }).populate("listing");
  res.json(bookings);
});

module.exports = router;
