import Listing from "../models/Listing.js";

export const createListing = async (req, res) => {
  const listing = await Listing.create({
    ...req.body,
    image: req.file.filename,
    owner: req.userId
  });
  res.json(listing);
};

export const getAllListings = async (req, res) => {
  const listings = await Listing.find().populate("owner");
  res.json(listings);
};

export const myListings = async (req, res) => {
  const listings = await Listing.find({ owner: req.userId });
  res.json(listings);
};
