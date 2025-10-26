import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from './CartWidget.jsx'

export default function Navbar(){
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container">
        <Link className="navbar-brand" to="/">Pastelería</Link>

        {/* Botón hamburguesa */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="nav" className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink className="nav-link" to="/">Inicio</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/productos">Productos</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/registro">Registro</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li>
            {/* 👇 Link textual extra al carrito */}
            <li className="nav-item"><NavLink className="nav-link" to="/carrito">Carrito</NavLink></li>
          </ul>

          {/* 👇 Widget con contador y acceso rápido */}
          <CartWidget />
        </div>
      </div>
    </nav>
  )
}
