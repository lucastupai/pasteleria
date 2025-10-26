import React from 'react'
import { useCart } from '../context/CartContext.jsx'
import { Link } from 'react-router-dom'

export default function Carrito(){
  const { state, dispatch, total } = useCart()
  const usuario = JSON.parse(localStorage.getItem('usuarioActual') || 'null')
  return (
    <section>
      <h1>Carrito</h1>
      {usuario
      ? <p className="text-success">Tu descuento del 10% se aplicará en el Checkout.</p>
      : <p className="text-muted">Inicia sesión para descuento del 10% en Checkout.</p>}
      {state.items.length === 0 ? (
        <p>No hay productos. <Link to="/productos">Ver productos</Link></p>
      ) : (
        <div className="table-responsive">
          <table className="table align-middle">
            <thead><tr><th>Producto</th><th>Cant.</th><th>Precio</th><th></th></tr></thead>
            <tbody>
              {state.items.map(i => (
                <tr key={i.id}>
                  <td>{i.name}</td>
                  <td>
                    <input
                      type="number" min="1" className="form-control"
                      value={i.qty}
                      onChange={e=>dispatch({type:'UPDATE_QTY', payload:{id:i.id, qty:Number(e.target.value)}})}
                    />
                  </td>
                  <td>${i.price * i.qty}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-danger"
                      onClick={()=>dispatch({type:'REMOVE_ITEM', payload:{id:i.id}})}>
                      Quitar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="d-flex justify-content-between">
            <button className="btn btn-outline-secondary" onClick={()=>dispatch({type:'CLEAR'})}>Vaciar</button>
            <div className="d-flex align-items-center gap-3">
              <strong>Total: ${total}</strong>
              <Link className="btn btn-success" to="/checkout">Pagar</Link>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
