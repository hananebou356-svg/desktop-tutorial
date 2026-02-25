import { useState, useEffect } from 'react';
import axios from 'axios';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMyBookings();
  }, []);

  const fetchMyBookings = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Please login first');
        return;
      }

      const res = await axios.get('http://localhost:5000/api/bookings/my-bookings', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setBookings(res.data);
    } catch (err) {
      setError('Failed to load your bookings');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger text-center">
        {error}
      </div>
    );
  }

  return (
    <div>
      <h2>My Bookings</h2>

      {bookings.length === 0 ? (
        <div className="text-center">
          <p>You haven't made any bookings yet.</p>
          <a href="/" className="btn btn-primary">
            Browse Listings
          </a>
        </div>
      ) : (
        <div className="row">
          {bookings.map(booking => (
            <div key={booking._id} className="col-md-6 mb-4">
              <div className="card">
                {booking.listing.image && (
                  <img
                    src={booking.listing.image}
                    className="card-img-top"
                    alt={booking.listing.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{booking.listing.title}</h5>
                  <p className="card-text text-muted">{booking.listing.city}</p>
                  <p className="card-text">
                    <strong>Check-in:</strong> {new Date(booking.checkIn).toLocaleDateString()}
                  </p>
                  <p className="card-text">
                    <strong>Check-out:</strong> {new Date(booking.checkOut).toLocaleDateString()}
                  </p>
                  <p className="card-text">
                    <strong>Total Price:</strong> {booking.totalPrice} MAD
                  </p>
                  <p className="card-text">
                    <strong>Price per night:</strong> {booking.listing.price} MAD
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
