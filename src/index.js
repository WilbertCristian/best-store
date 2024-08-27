import React from "react";
import ReactDOM from "react-dom/client";
import { Footer, Navbar } from "./components/layout";
import Inicio from "./pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacto from "./pages/contacto";
import NoEncontrado from "./pages/NoEncontrado";
import ProductList from "./pages/admin/products/productList";
import CreateProduct from "./pages/admin/products/create";
import EditProduct from "./pages/admin/products/editProduct";
// import { Link } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/admin/products" element={<ProductList />} />
        <Route path="/admin/products/create" element={<CreateProduct />} />
        <Route path="/admin/products/edit/:id" element={<EditProduct />} />
        <Route path="*" element={<NoEncontrado />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
