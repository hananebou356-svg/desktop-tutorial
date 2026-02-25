import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Home() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      const res = await api.get("/listings");
      setListings(res.data);
 };
    fetchListings();
  }, []);

  return (
    <div>
      <h1>All Listings</h1>
      {listings.map(l => (
        <div key={l._id}>
          <h2>{l.title}</h2>
          <p>{l.description}</p>
          <p>{l.city} - ${l.price}</p>
          <img src={`http://localhost:5000/uploads/${l.image}`} width="200" />
        </div>
      ))}
    </div>
  );
}
