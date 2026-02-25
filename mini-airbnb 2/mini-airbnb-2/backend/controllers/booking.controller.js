import Booking from "../models/Booking.js";
import Listing from "../models/Listing.js";

export const createBooking = async (req, res) => {
  const { listingId, startDate, endDate } = req.body;
  const listing = await Listing.findById(listingId);

  const days = (new Date(endDate) - new Date(startDate)) / 86400000;
  const totalPrice = days * listing.price;

  const booking = await Booking.create({
    user: req.userId,
    listing: listingId,
    startDate,
    endDate,
    totalPrice
  });

  res.json(booking);
};

export const myBookings = async (req, res) => {
  const bookings = await Booking.find({ user: req.userId })
    .populate("listing");
  res.json(bookings);
};
