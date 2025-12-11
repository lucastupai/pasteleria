import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import CartWidget from './CartWidget.jsx';

export default function Navbar() {
  const navigate = useNavigate();
  const [menuAbierto, setMenuAbierto] = useState(false);

  const usuario = JSON.parse(localStorage.getItem('usuarioActual') || 'null');
  const username = localStorage.getItem('username');

  function handleLogout() {
    if (confirm('¿Deseas cerrar sesión?')) {
      localStorage.removeItem('usuarioActual');
      localStorage.removeItem('username');
      localStorage.removeItem('rol');
      localStorage.removeItem('token');
      navigate('/');
    }
  }

  function cerrarMenu() {
    setMenuAbierto(false);
  }

  return (
    <>
      {/* NAVBAR SUPERIOR */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
        <Link className="navbar-brand fw-bold" to="/">
          Pastelería
        </Link>

        {/* Botón hamburguesa para menú móvil */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú de escritorio */}
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">

            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={cerrarMenu}>
                Inicio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/nosotros" onClick={cerrarMenu}>
                Nosotros
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/productos" onClick={cerrarMenu}>
                Productos
              </NavLink>
            </li>

            {!usuario && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/registro" onClick={cerrarMenu}>
                    Registro
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/login" onClick={cerrarMenu}>
                    Login
                  </NavLink>
                </li>
              </>
            )}

            {usuario && (
              <>
                <li className="nav-item d-flex align-items-center">
                  <span className="navbar-text me-2">
                    Hola, <strong>{username || usuario.nombre}</strong>
                  </span>
                </li>

                <li className="nav-item">
                  <button className="btn btn-danger" onClick={handleLogout}>
                    Cerrar sesión
                  </button>
                </li>
              </>
            )}
          </ul>

          <CartWidget />
        </div>
      </nav>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {menuAbierto && (
        <div className="navbar-mobile bg-light p-3 shadow" style={{ position: 'absolute', width: '100%', zIndex: 1000 }}>
          <ul className="nav flex-column">

            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={cerrarMenu}>Inicio</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/nosotros" onClick={cerrarMenu}>Nosotros</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/productos" onClick={cerrarMenu}>Productos</NavLink>
            </li>

            {!usuario && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/registro" onClick={cerrarMenu}>Registro</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login" onClick={cerrarMenu}>Login</NavLink>
                </li>
              </>
            )}

            {usuario && (
              <>
                <li className="nav-item">
                  <span className="nav-link">Hola, <strong>{username}</strong></span>
                </li>
                <li className="nav-item">
                  <button className="btn btn-danger w-100" onClick={() => { cerrarMenu(); handleLogout(); }}>
                    Cerrar sesión
                  </button>
                </li>
              </>
            )}

            <li className="nav-item mt-2">
              <CartWidget />
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
