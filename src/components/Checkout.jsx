import React, { useState } from 'react'

export default function Checkout({ total = 0 }) {
  const [nombre, setNombre] = useState('')
  const [direccion, setDireccion] = useState('')
  const [pago, setPago] = useState('debito')
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!nombre || !direccion) {
      setEnviado(true)
      return
    }
    alert('Compra realizada')
  }

  return (
    <section className="col-md-6 mx-auto">
      <h1>Checkout</h1>
      <p>
        Total a pagar: <strong>${total}</strong>
      </p>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            className={`form-control ${enviado && !nombre ? 'is-invalid' : ''}`}
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          {enviado && !nombre && <div className="invalid-feedback">Campo requerido</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Dirección</label>
          <input
            className={`form-control ${enviado && !direccion ? 'is-invalid' : ''}`}
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
          {enviado && !direccion && <div className="invalid-feedback">Campo requerido</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Método de pago</label>
          <select
            className="form-select"
            value={pago}
            onChange={(e) => setPago(e.target.value)}
          >
            <option value="debito">Débito</option>
            <option value="credito">Crédito</option>
            <option value="transferencia">Transferencia</option>
          </select>
        </div>

        <button className="btn btn-success" disabled={total <= 0}>
          Pagar
        </button>
      </form>
    </section>
  )
}
