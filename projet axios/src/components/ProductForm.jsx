import { useState, useEffect } from "react";


export default function ProductForm({ onSubmit, initialData }) {
const [product, setProduct] = useState({ title: "", price: "", description: "" });


useEffect(() => {
if (initialData) setProduct(initialData);
}, [initialData]);


const handleChange = (e) => {
setProduct({ ...product, [e.target.name]: e.target.value });
};


const handleSubmit = (e) => {
e.preventDefault();
onSubmit(product);
};


return (
<form onSubmit={handleSubmit} className="container">
<input className="form-control mb-2" name="title" placeholder="Titre" value={product.title} onChange={handleChange} />
<input className="form-control mb-2" name="price" placeholder="Prix" value={product.price} onChange={handleChange} />
<textarea className="form-control mb-2" name="description" placeholder="Description" value={product.description} onChange={handleChange} />
<button className="btn btn-success">Enregistrer</button>
</form>
);
}