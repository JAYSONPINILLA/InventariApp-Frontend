import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductsList from "./components/ProductsList";
import CategoryList from "./components/CategoryList";
import CategoryForm from "./components/CategoryForm";
import MeasurementList from "./components/MeasurementList";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from './assets/inventariapp3.jpeg';

function App() {
  return (
    <Router>
      {/* NAVBAR FIJA EN TOP Y DE ANCHO COMPLETO */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-center fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/"><img src={logo} alt="Inventario App" height="40" className="redondeada" /></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="paramDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Parametrización
                </a>
                <ul className="dropdown-menu" aria-labelledby="paramDropdown">
                  <li><Link className="dropdown-item" to="/categories">Categorías</Link></li>
                  <li><Link className="dropdown-item" to="/measurements">Unidades</Link></li>
                  <li><Link className="dropdown-item" to="/products">Productos</Link></li>
                  <li><Link className="dropdown-item" to="/sellers">Vendedores</Link></li>
                  <li><Link className="dropdown-item" to="/users">Usuarios</Link></li>
                </ul>
              </li>
              <li className="nav-item"><Link className="nav-link" to="/persons">Personas</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/sales">Ventas</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/entries">Entradas</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/reports">Reportes</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <div className="container mt-3 pt-5 mb-3">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<CategoryList />} />
              <Route path="/categories/new" element={<CategoryForm />} />
              <Route path="/categories/edit/:id" element={<CategoryForm />} />              

              <Route path="/measurements" element={<MeasurementList />} />
              <Route path="/measurements/new" element={<MeasurementForm />} />
              <Route path="/measurements/edit/:id" element={<MeasurementForm />} />              

              <Route path="/products" element={<ProductsList />} />
              <Route path="/products/new" element={<ProductForm />} />
              <Route path="/products/edit/:id" element={<ProductForm />} />              

              <Route path="/sellers" element={<div>Componente Vendedores</div>} />
              <Route path="/users" element={<div>Componente Usuarios</div>} />
              <Route path="/persons" element={<div>Componente Personas</div>} />
              <Route path="/sales" element={<div>Componente Ventas</div>} />
              <Route path="/entries" element={<div>Componente Notas de entrada</div>} />
              <Route path="/reports" element={<div>Componente Reportes</div>} />
            </Routes>
            <br />
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-dark text-white text-center py-1 fixed-bottom">
        <div className="container">
          <small>&copy; {new Date().getFullYear()} InventariApp - Todos los derechos reservados</small>
        </div>
      </footer>
    </Router>
  );
}

export default App;
