const API_URL = import.meta.env.VITE_API_URL;

export async function apiGet(path) {
  const res = await fetch(`${API_URL}${path}`);
  if (!res.ok) {
    throw new Error('Error al llamar a la API');
  }
  return res.json();
}
