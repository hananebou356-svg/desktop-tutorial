const express = require('express');
const Listing = require('../models/Listing');
const auth = require('../middleware/auth');
const router = express.Router();

// @route   GET /api/listings
// @desc    Get all listings
router.get('/', async (req, res) => {
  try {
    const listings = await Listing.find().sort({ createdAt: -1 });
    res.json(listings);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// @route   GET /api/listings/my-listings
router.get('/my-listings', auth, async (req, res) => {
  try {
    const listings = await Listing.find({ owner: req.user.id }).sort({ createdAt: -1 });
    res.json(listings);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// @route   GET /api/listings/:id
router.get('/:id', async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id).populate('owner', 'name email');
    if (!listing) return res.status(404).json({ message: 'Listing not found' });
    res.json(listing);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// @route   POST /api/listings
router.post('/', auth, async (req, res) => {
  try {
    const { title, description, city, price, image } = req.body;
    const newListing = new Listing({
      title, description, city, price, image,
      owner: req.user.id
    });
    const listing = await newListing.save();
    res.json(listing);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// @route   PUT /api/listings/:id
router.put('/:id', auth, async (req, res) => {
  try {
    let listing = await Listing.findById(req.params.id);
    if (!listing) return res.status(404).json({ message: 'Listing not found' });
    if (listing.owner.toString() !== req.user.id) return res.status(401).json({ message: 'User not authorized' });

    listing = await Listing.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(listing);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// @route   DELETE /api/listings/:id
router.delete('/:id', auth, async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) return res.status(404).json({ message: 'Listing not found' });
    if (listing.owner.toString() !== req.user.id) return res.status(401).json({ message: 'User not authorized' });

    await listing.deleteOne();
    res.json({ message: 'Listing removed' });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
