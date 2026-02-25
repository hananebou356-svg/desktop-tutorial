import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  listing: { type: mongoose.Schema.Types.ObjectId, ref: "Listing" },
  startDate: Date,
  endDate: Date,
  totalPrice: Number
}, { timestamps: true });

export default mongoose.model("Booking", bookingSchema);
