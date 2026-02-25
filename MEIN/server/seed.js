const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const User = require('./models/User');
const Listing = require('./models/Listing');
const Booking = require('./models/Booking');

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mini-airbnb');
    console.log('Connected to MongoDB for seeding...');

    // Clear existing data
    await User.deleteMany();
    await Listing.deleteMany();
    await Booking.deleteMany();
    console.log('Cleared existing data.');

    // Create a host user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password123', salt);

    const host = await User.create({
      name: 'Ahmed Bennani',
      email: 'ahmed@example.com',
      password: hashedPassword
    });

    const guest = await User.create({
      name: 'Sara Filali',
      email: 'sara@example.com',
      password: hashedPassword
    });

    console.log('Users created.');

    // Create listings
    const listings = [
      {
        title: 'Authentic Riad in Marrakech Medina',
        description: 'Experience the magic of the red city in this beautiful traditional riad with a swimming pool and rooftop terrace.',
        city: 'Marrakech',
        price: 1200,
        image: 'https://images.unsplash.com/photo-1539635278303-d4002c0caeed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        owner: host._id
      },
      {
        title: 'Modern Apartment with Sea View',
        description: 'A stunning modern apartment located in the heart of Casablanca, overlooking the Atlantic Ocean.',
        city: 'Casablanca',
        price: 850,
        image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
        owner: host._id
      },
      {
        title: 'Traditional Blue House in Chefchaouen',
        description: 'Stay in a cozy traditional blue house in the world-famous blue city of Chefchaouen.',
        city: 'Chefchaouen',
        price: 450,
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80',
        owner: host._id
      },
      {
        title: 'Luxury Villa with Garden in Rabat',
        description: 'Relax in this spacious villa with a lush garden, perfect for families visiting the capital.',
        city: 'Rabat',
        price: 2500,
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80',
        owner: host._id
      }
    ];

    await Listing.insertMany(listings);
    console.log('Listings seeded.');

    mongoose.connection.close();
    console.log('Seeding complete. Connection closed.');
  } catch (err) {
    console.error('Error seeding data:', err);
    process.exit(1);
  }
};

seedData();
