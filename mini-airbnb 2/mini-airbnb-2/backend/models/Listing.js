import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
  title: String,
  location: String,
  price: Number,
  image: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

export default mongoose.model("Listing", listingSchema);
