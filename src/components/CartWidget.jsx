import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export default function CartWidget(){
  const { state, total } = useCart()
  const count = state.items.reduce((acc,i)=>acc + i.qty, 0)
  return (
    <div className="d-flex align-items-center gap-3">
      <span className="text-muted">Total: ${total}</span>
      <Link to="/carrito" aria-label="Ir al carrito" className="btn btn-outline-dark">
        🛒 <span className="ms-1">{count}</span>
      </Link>
    </div>
  )
}
