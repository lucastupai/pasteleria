import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard.jsx";

export default function ProductGrid() {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://54.226.254.75:8082/api/productos")
      .then(res => res.json())
      .then(data => {
        setProductos(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error al cargar productos:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div className="row g-3">
      {productos.map(p => (
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
  