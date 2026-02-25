import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ListingDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: ''
  });
  const [bookingLoading, setBookingLoading] = useState(false);

  useEffect(() => {
    fetchListing();
  }, [id]);

  const fetchListing = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/listings/${id}`);
      setListing(res.data);
    } catch (err) {
      setError('Failed to load listing details');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const onBookingChange = e => setBookingData({ ...bookingData, [e.target.name]: e.target.value });

  const onBook = async e => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please login to book this listing');
      navigate('/login');
      return;
    }

    setBookingLoading(true);
    try {
      await axios.post('http://localhost:5000/api/bookings', {
        listingId: id,
        ...bookingData
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Booking successful!');
      navigate('/my-bookings');
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to book');
      console.error(err);
    } finally {
      setBookingLoading(false);
    }
  };

  if (loading) return <div className="text-center mt-5"><div className="spinner-border"></div></div>;
  if (error) return <div className="alert alert-danger">{error}</div>;
  if (!listing) return <div className="text-center mt-5">Listing not found</div>;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          {listing.image && (
            <img 
              src={listing.image} 
              className="img-fluid rounded mb-4" 
              alt={listing.title} 
              style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
            />
          )}
          <h1>{listing.title}</h1>
          <p className="text-muted">{listing.city}</p>
          <hr />
          <h3>Description</h3>
          <p>{listing.description}</p>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm mt-4 mt-md-0">
            <div className="card-body">
              <h4>{listing.price} MAD <small className="text-muted">/ night</small></h4>
              <hr />
              <form onSubmit={onBook}>
                <div className="mb-3">
                  <label className="form-label">Check-in</label>
                  <input 
                    type="date" 
                    className="form-control" 
                    name="checkIn" 
                    value={bookingData.checkIn} 
                    onChange={onBookingChange} 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Check-out</label>
                  <input 
                    type="date" 
                    className="form-control" 
                    name="checkOut" 
                    value={bookingData.checkOut} 
                    onChange={onBookingChange} 
                    required 
                  />
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary w-100" 
                  disabled={bookingLoading}
                >
                  {bookingLoading ? 'Booking...' : 'Reserve Now'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
