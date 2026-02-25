import ProductForm from "../components/ProductForm";
import { createProduct } from "../api/productApi";
import { useNavigate } from "react-router-dom";


export default function CreateProduct() {
const navigate = useNavigate();


const handleCreate = (data) => {
createProduct(data).then(() => navigate("/"));
};


return <ProductForm onSubmit={handleCreate} />;
}