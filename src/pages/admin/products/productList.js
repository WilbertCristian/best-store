
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    function getProducts() {
        fetch('http://localhost:4000/products?_sort=id&_order=desc')
            .then(response => response.json())
            .then(json => setProducts(json))
            .catch(error => console.error(error, "Error al obtener los productos"))
    }

    useEffect(() => {
        getProducts();
    }, []);
    // function refreshProducts() {
    //     getProducts();
    //   }
    return (
        <div className="container my-5">
            <h1 className="text-center mb-5">Productos</h1>
            <div className="row">
                <div className="col-12">
                    <Link to="/admin/products/create" className="btn btn-primary" role="button">Crear producto</Link>
                    <button type="button" className="btn btn-secondary" onclick={getProducts()}>Refrescar</button>
                </div>
            </div>
            <div className="row ">
                <div className="col-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Categoria</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, index) => (
                                    <tr key={index}>
                                        <th scope="row">{product.id}</th>
                                        <td>{product.name}</td>
                                        <td>{product.description}</td>
                                        <td>{product.price} bs</td>
                                        <td>{product.stock}</td>
                                        <td>{product.category}</td>
                                        <td>
                                            <Link to={`/admin/products/edit/${product.id}`} className="btn btn-primary">Editar</Link>
                                            <button type="button" className="btn btn-danger">Eliminar</button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}   