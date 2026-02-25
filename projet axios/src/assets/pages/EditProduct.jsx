import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProduct, updateProduct } from "../api/productApi";
import ProductForm from "../components/ProductForm";


export default function EditProduct() {
const { id } = useParams();
const navigate = useNavigate();
const [product, setProduct] = useState(null);


useEffect(() => {
getProduct(id).then(res => setProduct(res.data));
}, [id]);


const handleUpdate = (data) => {
updateProduct(id, data).then(() => navigate("/"));
};


return product && <ProductForm initialData={product} onSubmit={handleUpdate} />;
}