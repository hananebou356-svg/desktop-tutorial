import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MyListings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMyListings();
  }, []);

  const fetchMyListings = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Please login first');
        return;
      }

      const res = await axios.get('http://localhost:5000/api/listings/my-listings', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setListings(res.data);
    } catch (err) {
      setError('Failed to load your listings');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteListing = async (id) => {
    if (!window.confirm('Are you sure you want to delete this listing?')) {
      return;
    }

    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/listings/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setListings(listings.filter(listing => listing._id !== id));
    } catch (err) {
      setError('Failed to delete listing');
      console.error(err);
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
        <h2>My Listings</h2>
        <Link to="/add-listing" className="btn btn-primary">
          Add New Listing
        </Link>
      </div>

      {listings.length === 0 ? (
        <div className="text-center">
          <p>You haven't created any listings yet.</p>
          <Link to="/add-listing" className="btn btn-primary">
            Create Your First Listing
          </Link>
        </div>
      ) : (
        <div className="row">
          {listings.map(listing => (
            <div key={listing._id} className="col-md-6 mb-4">
              <div className="card">
                {listing.image && (
                  <img
                    src={listing.image}
                    className="card-img-top"
                    alt={listing.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{listing.title}</h5>
                  <p className="card-text text-muted">{listing.city}</p>
                  <p className="card-text">{listing.description}</p>
                  <p className="card-text">
                    <strong>{listing.price} MAD/night</strong>
                  </p>
                  <div className="d-flex gap-2">
                    <Link to={`/edit-listing/${listing._id}`} className="btn btn-warning btn-sm">
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteListing(listing._id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
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

export default MyListings;
