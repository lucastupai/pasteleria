import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import CartWidget from './CartWidget.jsx'

export default function Navbar() {
  const navigate = useNavigate()
  const usuario = JSON.parse(localStorage.getItem('usuarioActual') || 'null')

  const handleLogout = () => {
    if (confirm('¿Deseas cerrar sesión?')) {
      localStorage.removeItem('usuarioActual')
      navigate('/login')
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">🍰 Pastelería</Link>

        {/* Botón hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="nav" className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/productos">Productos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/registro">Registro</NavLink>
            </li>
            {!usuario && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>
            )}
            <li className="nav-item">
              <NavLink className="nav-link" to="/carrito">Carrito</NavLink>
            </li>
          </ul>

          {/* 👇 Mostrar usuario logueado y botón de salir */}
          <div className="d-flex align-items-center gap-3">
            {usuario ? (
              <>
                <span className="text-success fw-semibold">
                  Bienvenida/o, {usuario.nombre} ✅
                </span>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={handleLogout}
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              <NavLink className="btn btn-primary btn-sm" to="/login">
                Iniciar sesión
              </NavLink>
            )}
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  )
}
