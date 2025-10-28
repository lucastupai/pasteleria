import React, { useState } from 'react';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState('');

  const isEmailValid = (v) => /\S+@\S+\.\S+/.test(v);
  const isPwdValid   = (v) => v.length >= 6;

  function getUsuarios() {
    try {
      const raw = localStorage.getItem('usuarios');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTouched(true);
    setError('');

    if (!isEmailValid(form.email) || !isPwdValid(form.password)) return;

    const email = form.email.trim().toLowerCase();
    const usuarios = getUsuarios();
    const usuario = usuarios.find(
      (u) =>
        (u.email || '').toLowerCase() === email &&
        (u.password || '') === form.password
    );

    if (!usuario) {
      setError('Correo o contraseña incorrectos');
      return;
    }

    try {
      localStorage.setItem('usuarioActual', JSON.stringify(usuario));
    } catch {}

    if (typeof window !== 'undefined') {
      window.alert && window.alert(`Bienvenida/o, ${usuario.nombre ?? usuario.email} ✅`);
      window.location && (window.location.href = '/');
    }
  }

  const onChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
    if (error) setError('');
  };

  return (
    <section className="col-md-6 mx-auto">
      <h1>Login</h1>

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            aria-label="Email"
            className={`form-control ${touched && !isEmailValid(form.email) ? 'is-invalid' : ''}`}
            value={form.email}
            onChange={onChange('email')}
          />
          <div className="invalid-feedback">Email inválido</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            aria-label="Contraseña"
            className={`form-control ${touched && !isPwdValid(form.password) ? 'is-invalid' : ''}`}
            value={form.password}
            onChange={onChange('password')}
          />
          <div className="invalid-feedback">Mínimo 6 caracteres</div>
        </div>

        {error && (
          <div role="alert" className="alert alert-danger">
            {error}
          </div>
        )}

        <button type="submit" className="btn btn-primary">Ingresar</button>
      </form>
    </section>
  );
}
