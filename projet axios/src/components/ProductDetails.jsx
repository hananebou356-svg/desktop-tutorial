import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../api/productApi";


export default function ProductDetails() {
const { id } = useParams();
const [product, setProduct] = useState(null);


useEffect(() => {
getProduct(id).then(res => setProduct(res.data));
}, [id]);


if (!product) return <p>Loading...</p>;


return (
<div className="container">
<h2>{product.title}</h2>
<p>{product.description}</p>
<p><b>Prix :</b> {product.price}$</p>
</div>
);
}