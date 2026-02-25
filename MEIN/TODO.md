# Mini-Airbnb MERN Stack Development TODO

## Backend Setup
- [x] Create server folder structure
- [x] Initialize server package.json with dependencies (express, mongoose, bcryptjs, jsonwebtoken, cors, dotenv)
- [x] Set up Express server with MongoDB connection
- [x] Create User model (name, email, password)
- [x] Create Listing model (title, description, city, price, image, owner)
- [x] Create Booking model (user, listing, checkIn, checkOut, totalPrice)
- [x] Implement JWT middleware for authentication
- [x] Create auth routes (register, login, profile)
- [x] Create listings routes (GET all, GET by id, POST create, PUT update, DELETE)
- [x] Create bookings routes (GET user bookings, POST create booking)
- [x] Add CORS and other middleware

## Frontend Updates
- [x] Install additional dependencies in client (axios, react-router-dom already present, add bootstrap if needed)
- [x] Set up React Router with routes for all pages
- [x] Create Login page component
- [x] Create Register page component
- [x] Create Home page (listings display)
- [x] Create Add Listing page
- [x] Create My Listings page
- [x] Create My Bookings page
- [x] Implement Axios instance with base URL and JWT interceptor
- [x] Add JWT storage utilities (localStorage)
- [x] Create Protected Route component
- [x] Update App.jsx with routing and Bootstrap
- [x] Connect all pages to backend APIs
- [x] Add navigation header with login/logout

## Testing and Final Touches
- [x] Test user registration and login
- [x] Test listing creation and display
- [x] Test booking functionality
- [x] Ensure protected routes work
- [x] Add basic styling with Bootstrap
- [x] Handle errors and loading states

## How to Run the Application

1. **Start MongoDB**: Make sure MongoDB is running locally on port 27017
2. **Start Backend**:
   ```bash
   cd server
   npm start
   ```
3. **Start Frontend**:
   ```bash
   cd client
   npm run dev
   ```
4. **Access Application**: Open http://localhost:5173 in your browser

## Features Implemented
- User authentication (register/login) with JWT
- Protected routes for authenticated users
- Listings management (create, view, edit, delete)
- Bookings system with date selection
- Responsive Bootstrap UI
- Error handling and loading states
