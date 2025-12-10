import React, { useEffect } from 'react';

import { CartProvider } from './context/CartContext.jsx';
import AppRouter from './router/AppRouter.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem('usuarioActual'));
    if (usuario) {
      console.log('Usuario activo:', usuario.nombre);
    }
  }, []);

  return (
    <CartProvider>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="container py-4 flex-grow-1">
          <AppRouter />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
