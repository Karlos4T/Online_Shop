import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./Components/Menu";
import { Products } from "./Components/Products/Products";
import { Home } from "./Components/Home";
import { ProductsForm } from "./Components/Products/ProductsForm";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/editproducts" element={<ProductsForm />} />
        <Route path="/"></Route>
        <Route path="/*" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);