import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import CartWidget from './CartWidget.jsx';

export default function Navbar() {
  const navigate = useNavigate();

  const usuario = JSON.parse(localStorage.getItem('usuarioActual') || 'null');
  const username = localStorage.getItem('username');
  const rol = localStorage.getItem('rol');

  function handleLogout() {
    if (confirm("¿Deseas cerrar sesión?")) {
      localStorage.removeItem('usuarioActual');
      localStorage.removeItem('username');
      localStorage.removeItem('rol');
      localStorage.removeItem('token');

      navigate('/');
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">

      <Link className="navbar-brand" to="/">
        Pastelería
      </Link>

      <div className="collapse navbar-collapse">

        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Inicio</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/productos">Productos</NavLink>
          </li>

          {!usuario && (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/registro">Registro</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>
            </>
          )}

          {usuario && (
            <li className="nav-item">
              <button className="btn btn-danger" onClick={handleLogout}>
                Cerrar sesión
              </button>
            </li>
          )}
        </ul>

        <CartWidget />

      </div>
    </nav>
  );
}
