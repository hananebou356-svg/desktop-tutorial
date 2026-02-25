import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import CreateProduct from "./pages/CreateProduct";
import EditProduct from "./pages/EditProduct";

export default function App() {
return (
<Routes>
<Route path="/" element={<ProductList />} />
<Route path="/product/:id" element={<ProductDetails />} />
<Route path="/create" element={<CreateProduct />} />
<Route path="/edit/:id" element={<EditProduct />} />
</Routes>

);
}
