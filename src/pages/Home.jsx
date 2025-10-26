import React from 'react'
export default function Home(){
  const usuario = JSON.parse(localStorage.getItem('usuarioActual') || 'null')
  return (
    <section>
      <h1>Bienvenido{usuario ? `, ${usuario.nombre}` : ''} 👋</h1>
      {usuario
        ? <p className="text-success">Tienes <strong>10% de descuento</strong> en tu compra.</p>
        : <p className="text-muted">Regístrate o inicia sesión para obtener <strong>10% de descuento</strong>.</p>}
    </section>
  )
}
