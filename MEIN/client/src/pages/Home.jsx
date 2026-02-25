import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/listings');
      setListings(res.data);
    } catch (err) {
      setError('Failed to load listings');
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
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Available Listings</h2>
        <Link to="/add-listing" className="btn btn-primary">
          Add New Listing
        </Link>
      </div>

      {listings.length === 0 ? (
        <div className="text-center">
          <p>No listings available yet.</p>
          <Link to="/add-listing" className="btn btn-primary">
            Be the first to add a listing!
          </Link>
        </div>
      ) : (
        <div className="row">
          {listings.map(listing => (
            <div key={listing._id} className="col-md-4 mb-4">
              <div className="card h-100">
                {listing.image && (
                  <img
                    src={listing.image}
                    className="card-img-top"
                    alt={listing.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                )}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{listing.title}</h5>
                  <p className="card-text text-muted">{listing.city}</p>
                  <p className="card-text">{listing.description}</p>
                  <div className="mt-auto">
                    <p className="card-text">
                      <strong>{listing.price} MAD/night</strong>
                    </p>
                    <Link to={`/listing/${listing._id}`} className="btn btn-primary w-100">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
