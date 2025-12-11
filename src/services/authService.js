// src/services/authService.js

const API_BASE = 'http://3.90.161.208:8082';

export async function login(username, password) {
  const resp = await fetch(`${API_BASE}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!resp.ok) {
    throw new Error('Credenciales inválidas');
  }

  return await resp.json(); // {token, username, rol}
}
