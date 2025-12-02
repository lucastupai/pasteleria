import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard.jsx";

export default function ProductGrid() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Llamada al backend de Spring Boot
    fetch("http://localhost:8082/api/productos")
      .then((res) => res.json())
      .then((data) => {
        console.log("Productos desde backend:", data);
        setProductos(data);
      })
      .catch((err) => {
        console.error("Error cargando productos:", err);
      });
  }, []);

  return (
    <div className="row g-3">
      {productos.map((p) => (
        <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
          <ProductCard
            id={p.id}
            categoria={p.categoria}
            name={p.nombre}          // mapea nombre → name
            price={p.precio}         // precio → price
            img={p.imagen}           // imagen → img
            desc={p.descripcion}     // descripcion → desc
            codigo={p.codigo}        // si algún día agregas "codigo" en el backend
          />
        </div>
      ))}
    </div>
  );
}
