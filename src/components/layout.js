import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom box-shadow">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="logo192.png"
            alt="..."
            width="30"
            height="24"
            className="m2-2"
          />
          Mejor Tienda
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-dark" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/Contacto">
                Contacto
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-dark"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Admin
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/admin/products">
                    Products
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/profile">
                    Profile
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/logout">
                    Logout
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a
                        href="/"
                        className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
                    >
                        <svg
                            className="bi"
                            width="30"
                            height="24"
                        >
                            <use xlinkHref="#bootstrap" />
                        </svg>
                    </a>
                    <span className="text-muted">
                        &copy; 2024 Todos los derechos reservados:
                    </span>
                </div>
            </footer>
        </div>
    );
}
