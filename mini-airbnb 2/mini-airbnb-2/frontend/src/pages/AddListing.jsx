import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function AddListing() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      await API.post("/listings", formData, {
        headers: { Authorization: localStorage.getItem("token") },
      });
      navigate("/my-listings");
    } catch (err) {
      console.log(err);
      alert("Failed to add listing. Check console for details.");
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "70vh" }}
    >
      <div className="card p-4 shadow-sm w-100" style={{ maxWidth: "500px" }}>
        <h2 className="text-center mb-4">Add Listing</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            placeholder="Title"
            className="form-control mb-3"
            required
          />
          <input
            name="location"
            placeholder="Location"
            className="form-control mb-3"
            required
          />
          <input
            name="price"
            type="number"
            placeholder="Price"
            className="form-control mb-3"
            required
          />
          <input
            name="image"
            type="file"
            className="form-control mb-3"
            required
          />
          <button className="btn btn-primary w-100">Add Listing</button>
        </form>
      </div>
    </div>
  );
}
