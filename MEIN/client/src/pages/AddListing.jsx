import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddListing = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    city: '',
    price: '',
    image: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { title, description, city, price, image } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Please login first');
        return;
      }

      await axios.post('http://localhost:5000/api/listings', formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      navigate('/my-listings');
    } catch (err) {
      setError('Failed to create listing');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-header">
            <h3 className="text-center">Add New Listing</h3>
          </div>
          <div className="card-body">
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={title}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  name="description"
                  value={description}
                  onChange={onChange}
                  rows="3"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">City</label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  value={city}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Price per night (MAD)</label>
                <input
                  type="number"
                  className="form-control"
                  name="price"
                  value={price}
                  onChange={onChange}
                  min="1"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Image URL (optional)</label>
                <input
                  type="url"
                  className="form-control"
                  name="image"
                  value={image}
                  onChange={onChange}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                {loading ? 'Creating Listing...' : 'Create Listing'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddListing;
