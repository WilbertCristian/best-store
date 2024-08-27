import { Link } from "react-router-dom";
export default function EditProduct() {
     
    return (    
        <div className="container my-5" style={{ maxWidth: '800px', margin: '0 auto', marginTop: '50px', border: '1px solid #ccc', padding: '20px' }} >
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">Editar Producto</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Descripción</label>
                            <textarea className="form-control" id="description" rows="3"></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Precio</label>
                            <input type="number" className="form-control" id="price" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="stock" className="form-label">Stock</label>
                            <input type="number" className="form-control" id="stock" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Imagen</label>
                            <input type="file" className="form-control" id="image" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="category" className="form-label">Categoria</label>
                            <select className="form-select" id="category">
                            <option value="1">Accesorios</option>
                                <option value="2">Almacenamiento</option>
                                <option value="3">Cable</option>
                                <option value="4">Cargador</option>
                                <option value="5">Electronica</option>
                                <option value="6">Laptop</option>
                                <option value="7">Monitor</option>
                                <option value="8">Mouse</option>
                                <option value="9">Oficina</option>
                                <option value="10">Otros</option>
                                <option value="11">Smartphone</option>
                                <option value="12">Tablet</option>
                                <option value="13">Teclado</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Actualizar</button>
                        {/* <button type="button" className="btn btn-secondary" onClick={() => window.history.back()}>Cancelar</button> */}
                        <Link to="/admin/products" className="btn btn-secondary">Cancelar</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}