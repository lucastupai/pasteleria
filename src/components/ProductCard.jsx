import React from 'react'
import { useCart } from '../context/CartContext.jsx'

export default function ProductCard({ id, name, price, img, desc }) {
  const { dispatch } = useCart()

  return (
    <div className="card h-100 shadow-sm" style={{ borderRadius: '10px' }}>
      <img
        src={img}
        alt={name}
        className="card-img-top"
        height="160"
        style={{ objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-semibold">{name}</h5>

        {/* 👇 Nueva descripción */}
        {desc && (
          <p className="card-text text-muted mb-2" style={{
            fontSize: '0.9rem',
            display: '-webkit-box',
            WebkitLineClamp: 3,     // 👈 limita a 3 líneas
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            minHeight: '3.9em'
          }}>
            {desc}
          </p>
        )}

        <p className="fw-bold mt-auto mb-2">${price.toLocaleString('es-CL')}</p>

        <button
          aria-label="Agregar al carrito"
          className="btn btn-primary mt-auto"
          style={{ backgroundColor: '#5d4037', borderColor: '#5d4037' }}
          onClick={() => dispatch({ type: 'ADD_ITEM', payload: { id, name, price } })}
        >
          Agregar
        </button>
      </div>
    </div>
  )
}
