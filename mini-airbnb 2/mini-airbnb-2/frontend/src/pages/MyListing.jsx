import { useEffect, useState } from "react";
import API from "../services/api";

export default function MyListings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    API.get("/listings/mine", {
      headers: { Authorization: localStorage.getItem("token") }
    })
      .then(res => setListings(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container">
      <h1 className="mb-4 text-center">My Listings</h1>
      <div className="row">
        {listings.map(l => (
          <div key={l._id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img 
                src={`http://localhost:5000/uploads/${l.image}`} 
                className="card-img-top" 
                style={{ height: "200px", objectFit: "cover" }} 
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{l.title}</h5>
                <p className="card-text">{l.location}</p>
                <p className="card-text mt-auto fw-bold">${l.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
