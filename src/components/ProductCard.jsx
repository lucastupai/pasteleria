import React from 'react'
import { useCart } from '../context/CartContext.jsx'

export default function ProductCard({ id, name, price, img }){
  const { dispatch } = useCart()
  return (
    <div className="card h-100">
      <img src={img} alt={name} className="card-img-top" height="160" />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>
        <p className="card-text mb-3">${price}</p>
        <button
          aria-label="Agregar al carrito"
          className="btn btn-primary mt-auto"
          onClick={()=>dispatch({type:'ADD_ITEM', payload:{id, name, price}})}
        >
          Agregar
        </button>
      </div>
    </div>
  )
}
