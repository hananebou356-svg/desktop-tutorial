import express from "express";
import auth from "../middleware/auth.middleware.js";
import { createBooking, myBookings } from "../controllers/booking.controller.js";

const router = express.Router();

router.post("/", auth, createBooking);
router.get("/mine", auth, myBookings);

export default router;
