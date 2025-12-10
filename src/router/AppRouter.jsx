import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home.jsx';
import Productos from '../pages/Productos.jsx';
import Carrito from '../pages/Carrito.jsx';
import Registro from '../pages/Registro.jsx';
import Checkout from '../pages/Checkout.jsx';
import Login from '../pages/Login.jsx';
import Nosotros from '../pages/Nosotros.jsx';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
