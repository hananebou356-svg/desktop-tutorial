import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../api/productApi";
import { Link } from "react-router-dom";


export default function ProductList() {
const [products, setProducts] = useState([]);


const loadProducts = () => {
getProducts().then(res => setProducts(res.data));
};


useEffect(() => {
loadProducts();
}, []);


const handleDelete = (id) => {
if (confirm("Supprimer ce produit ?")) {
deleteProduct(id).then(loadProducts);
}
};


return (
<div className="container">
<h2>Liste des produits</h2>
<Link to="/create" className="btn btn-primary mb-3">Ajouter</Link>
<ul className="list-group">
{products.map(p => (
<li key={p.id} className="list-group-item d-flex justify-content-between">
<Link to={`/product/${p.id}`}>{p.title}</Link>
<div>
<Link to={`/edit/${p.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
<button onClick={() => handleDelete(p.id)} className="btn btn-danger btn-sm">Delete</button>
</div>
</li>
))}
</ul>
</div>
);
}