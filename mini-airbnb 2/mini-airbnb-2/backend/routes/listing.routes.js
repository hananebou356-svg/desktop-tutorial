import express from "express";
import auth from "../middleware/auth.middleware.js";
import upload from "../middleware/upload.middleware.js";
import { createListing, getAllListings, myListings } from "../controllers/listing.controller.js";

const router = express.Router();

router.get("/", getAllListings);
router.get("/mine", auth, myListings);
router.post("/", auth, upload.single("image"), createListing);

export default router;
