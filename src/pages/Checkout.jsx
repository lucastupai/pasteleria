import React, { useState } from 'react'
import { useCart } from '../context/CartContext.jsx'

export default function Checkout(){
  const { total, dispatch } = useCart()
  const [form, setForm] = useState({ nombre:'', direccion:'', metodo:'debito' })
  const [touched, setTouched] = useState(false)

  // Descuento por usuario logueado
  const usuario = JSON.parse(localStorage.getItem('usuarioActual') || 'null')
  const descuento = usuario ? 0.10 : 0
  const montoDescuento = Math.round(total * descuento)
  const totalConDescuento = Math.max(0, total - montoDescuento)

  function handleSubmit(e){
    e.preventDefault()
    setTouched(true)
    const ok = form.nombre && form.direccion && form.metodo
    if(!ok) return

    localStorage.setItem('ultimaCompra', JSON.stringify({
      total: totalConDescuento,
      descuento: montoDescuento,
      fecha: new Date().toISOString()
    }))
    dispatch({type:'CLEAR'})
    alert(`Pago realizado ✅ Total pagado: $${totalConDescuento}`)
  }

  return (
    <section className="col-md-6 mx-auto">
      <h1>Checkout</h1>

      <div className="mb-2">
        <p className="mb-1">Subtotal: <strong>${total}</strong></p>
        {usuario ? (
          <div className="alert alert-success py-2">
            Descuento usuario registrado (10%): <strong>-${montoDescuento}</strong><br/>
            Total final: <strong>${totalConDescuento}</strong>
          </div>
        ) : (
          <div className="alert alert-info py-2">
            Inicia sesión para obtener <strong>10% de descuento</strong>.
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label className="form-label" htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            className={`form-control ${touched && !form.nombre ? 'is-invalid':''}`}
            value={form.nombre}
            onChange={e=>setForm({...form, nombre:e.target.value})}
          />
          <div className="invalid-feedback">Campo requerido</div>
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="direccion">Dirección</label>
          <input
            id="direccion"
            className={`form-control ${touched && !form.direccion ? 'is-invalid':''}`}
            value={form.direccion}
            onChange={e=>setForm({...form, direccion:e.target.value})}
          />
          <div className="invalid-feedback">Campo requerido</div>
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="metodo">Método de pago</label>
          <select
            id="metodo"
            className="form-select"
            value={form.metodo}
            onChange={e=>setForm({...form, metodo:e.target.value})}
          >
            <option value="debito">Débito</option>
            <option value="credito">Crédito</option>
            <option value="transferencia">Transferencia</option>
          </select>
        </div>

        <button className="btn btn-success" disabled={!total}>Pagar</button>
      </form>
    </section>
  )
}
