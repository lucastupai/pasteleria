import React, { useState } from 'react'

export default function Login(){
  const [form, setForm] = useState({ email:'', password:'' })
  const [touched, setTouched] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    setTouched(true)
    const ok = form.email.includes('@') && form.password.length >= 6
    if(!ok) return

    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]')
    const usuario = usuarios.find(u => u.email === form.email && u.password === form.password)
    if(!usuario){
      setError('Correo o contraseña incorrectos')
      return
    }
    localStorage.setItem('usuarioActual', JSON.stringify(usuario))
    alert(`Bienvenida/o, ${usuario.nombre} ✅`)
    window.location.href = '/'
  }

  return (
    <section className="col-md-6 mx-auto">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            aria-label="Email"
            className={`form-control ${touched && !form.email.includes('@') ? 'is-invalid':''}`}
            value={form.email}
            onChange={e=>setForm({...form, email:e.target.value})}
          />
          <div className="invalid-feedback">Email inválido</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            aria-label="Contraseña"
            className={`form-control ${touched && form.password.length < 6 ? 'is-invalid':''}`}
            value={form.password}
            onChange={e=>setForm({...form, password:e.target.value})}
          />
          <div className="invalid-feedback">Mínimo 6 caracteres</div>
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button className="btn btn-primary">Ingresar</button>
      </form>
    </section>
  )
}
