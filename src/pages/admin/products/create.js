// import  App  from "../../../App";

import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { useState } from "react";

export default function CreateProduct() {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    // console.log('submit')

    const formData = new FormData(e.target);
    const product = Object.fromEntries(formData.entries());

    if (
      !product.name ||
      !product.description ||
      !product.price ||
      !product.stock ||
      !product.category
    ) {
      //   alert('Todos los campos son obligatorios')
      setShowModal(true);
      return;
    }

    console.log(product);

    try {
      const response = await fetch("http://localhost:4000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      const data = await response.json();

      if (response.ok) {
        navigate("/admin/products");
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Unable to connect to the server, please try again later");
    }
  }

  return (
    <div
      className="container my-5"
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        marginTop: "50px",
        border: "1px solid #ccc",
        padding: "20px",
      }}
    >
      <div className="row">
        <div className="col-12">
          <h1 className="text-center">Crear Producto</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Descripción
              </label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                name="description"
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Precio
              </label>
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="stock" className="form-label">
                Stock
              </label>
              <input
                type="number"
                className="form-control"
                id="stock"
                name="stock"
              />
            </div>
            {/* <div className="mb-3">
                            <label htmlFor="image" className="form-label">Imagen</label>
                            <input type="file" className="form-control" id="image" />
                        </div> */}
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Categoria
              </label>
              <select className="form-select" id="category" name="category">
                <option value="0" disabled selected>
                  --Seleccione Categoria--
                </option>
                <option value="Accesorios">Accesorios</option>
                <option value="Almacenamiento">Almacenamiento</option>
                <option value="Cable">Cable</option>
                <option value="Cargador">Cargador</option>
                <option value="Electronica">Electronica</option>
                <option value="Laptop">Laptop</option>
                <option value="Monitor">Monitor</option>
                <option value="Mouse">Mouse</option>
                <option value="Oficina">Oficina</option>
                <option value="Otros">Otros</option>
                <option value="Smartphone">Smartphone</option>
                <option value="Tablet">Tablet</option>
                <option value="Teclado">Teclado</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Crear
            </button>
            <Link to="/admin/products" className="btn btn-secondary">
              Cancelar
            </Link>
          </form>
          <Modal
            isOpen={showModal}
            onRequestClose={() => setShowModal(false)}
            style={{
              overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
              content: {
                width: "400px",
                height: "200px",
                margin: "auto",
                padding: "20px",
                border: "none",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                textAlign: "center",
              },
            }}
          >
            <h2 style={{color: "#660000"}}>¡Todos los campos son obligatorios!</h2>
            <button onClick={() => setShowModal(false)} style={{borderRadius: "5px", backgroundColor: "#007bff", color: "white", padding: "5px 10px", border: "none", marginTop: "20px"}}>ok</button>
          </Modal>
        </div>
      </div>
    </div>
  );
}
