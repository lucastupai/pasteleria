import React, { useState } from 'react'

export default function Registro(){
  const [form, setForm] = useState({ nombre:'', email:'', password:'' })
  const [touched, setTouched] = useState(false)

  function handleSubmit(e){
    e.preventDefault()
    setTouched(true)
    const ok = form.nombre && form.email.includes('@') && form.password.length >= 6
    if(!ok) return
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]')
    usuarios.push(form)
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    localStorage.setItem('usuarioActual', JSON.stringify(form))
    alert('Registrado ✅')
  }

  return (
    <section className="col-md-6 mx-auto">
      <h1>Registro</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input className={`form-control ${touched && !form.nombre ? 'is-invalid':''}`}
                 value={form.nombre} onChange={e=>setForm({...form, nombre:e.target.value})} />
          <div className="invalid-feedback">Campo requerido</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className={`form-control ${touched && !form.email.includes('@') ? 'is-invalid':''}`}
                 value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
          <div className="invalid-feedback">Email inválido</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input type="password" className={`form-control ${touched && form.password.length < 6 ? 'is-invalid':''}`}
                 value={form.password} onChange={e=>setForm({...form, password:e.target.value})} />
          <div className="invalid-feedback">Mínimo 6 caracteres</div>
        </div>
        <button className="btn btn-primary">Crear cuenta</button>
      </form>
    </section>
  )
}
