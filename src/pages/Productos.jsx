import React from 'react';
import ProductGrid from '../components/ProductGrid.jsx';

export default function Productos() {
  const rol = localStorage.getItem('rol');

  return (
    <section>

      {/* Mensaje para ADMIN */}
      {rol === 'ADMIN' && (
        <div className="alert alert-info mt-3">
          Estás logueado como <strong>ADMIN</strong>.
          Aquí puedes administrar el catálogo (crear, editar, eliminar productos).
        </div>
      )}

      {/* Mensaje para CLIENTE */}
      {rol === 'CLIENTE' && (
        <div className="alert alert-secondary mt-3">
          Estás navegando como cliente. Solo puedes ver los productos y usar el carrito.
        </div>
      )}

      {/* Mensaje para visitante no logueado */}
      {!rol && (
        <div className="alert alert-warning mt-3">
          No has iniciado sesión. Puedes ver los productos, pero algunas funciones
          están restringidas.
        </div>
      )}

      <h1 className="mt-4">Productos</h1>
      <ProductGrid />

    </section>
  );
}
