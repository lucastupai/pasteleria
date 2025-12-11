import React, { useState } from 'react';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const isEmailValid = (v) => /\S+@\S+\.\S+/.test(v);
  const isPwdValid = (v) => v.length >= 6;

  const API_BASE = 'http://3.90.161.208:8082';

  async function handleSubmit(e) {
    e.preventDefault();
    setTouched(true);
    setError('');

    if (!isEmailValid(form.email) || !isPwdValid(form.password)) return;

    setLoading(true);

    try {
      const resp = await fetch(`${API_BASE}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: form.email, // el backend usa "username"
          password: form.password,
        }),
      });

      if (!resp.ok) {
        setError('Correo o contraseña incorrectos');
        setLoading(false);
        return;
      }

      const data = await resp.json(); 
      // data = { token, username, rol }

      // Guardamos la sesión
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', data.username);
      localStorage.setItem('rol', data.rol);

      alert(`Bienvenido/a, ${data.username} (${data.rol})`);

      window.location.href = '/';
    } catch (err) {
      setError('Error al conectar con el servidor');
    }

    setLoading(false);
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

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Cargando...' : 'Ingresar'}
        </button>
      </form>
    </section>
  );
}
