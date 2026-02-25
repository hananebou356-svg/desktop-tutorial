const mongoose = require('mongoose');

const bookingRoutes = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    listing: { type: mongoose.Schema.Types.ObjectId, ref: 'Listing' },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Booking", bookingRoutes);