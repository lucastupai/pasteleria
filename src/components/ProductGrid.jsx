import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard.jsx';
import { apiGet } from '../services/api';

export default function ProductGrid() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    apiGet('/api/productos')
      .then((data) => {
        setProductos(data);
        setCargando(false);
      })
      .catch((err) => {
        console.error(err);
        setError('No se pudieron cargar los productos');
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <p>Cargando productos...</p>;
  }

  if (error) {
    return <p className="text-danger">{error}</p>;
  }

  return (
    <div className="row g-3">
      {productos.map((p) => (
        <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
          <ProductCard
            id={p.id}
            name={p.nombre}
            price={p.precio}
            img={p.imagen}
            desc={p.descripcion}
          />
        </div>
      ))}
    </div>
  );
}
