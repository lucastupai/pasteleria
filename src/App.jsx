import React, { useEffect } from 'react'

import { CartProvider } from './context/CartContext.jsx'
import AppRouter from './router/AppRouter.jsx'
import Navbar from './components/Navbar.jsx'

export default function App() {
  return (
    <CartProvider>
      <Navbar />
      <main className="container py-4">
        <AppRouter />
      </main>
    </CartProvider>
  )
  useEffect(() => {
  const usuario = JSON.parse(localStorage.getItem('usuarioActual'))
  if (usuario) {
    console.log("Usuario activo:", usuario.nombre)
  }
}, [])

}
