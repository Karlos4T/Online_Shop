import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./Components/Menu";
import { Products } from "./Components/Products/Products";
import { Home } from "./Components/Home";
import { ProductsForm } from "./Components/Products/ProductsForm";
import './Styles/Common.scss'
import { ProductPage } from "./Components/Products/ProductPage";
import { Login } from "./Components/Login";
import { Profile } from "./Components/Profile";
import { LayoutProducts } from "./Components/LayoutProducts";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/products" element={<LayoutProducts />} />
        <Route path="/products/:id" element={<ProductPage/>}/>
        <Route path="/editproducts" element={<ProductsForm />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/*" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);