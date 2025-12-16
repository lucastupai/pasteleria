import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard.jsx";

export default function ProductGrid() {
  const [productos, setProductos] = useState([]);
  const [filtrados, setFiltrados] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [loading, setLoading] = useState(true);

  // ✅ Usar el proxy de Nginx: /api -> 127.0.0.1:8082
  // ❌ NO usar http://13.218.231.171:8082 porque causa CORS
  const API_BASE = "";

  useEffect(() => {
    fetch(`${API_BASE}/api/productos`)
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener productos");
        return res.json();
      })
      .then((data) => {
        setProductos(data);
        setFiltrados(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar productos:", err);
        setLoading(false);
      });
  }, []);

  // 🔎 Filtro por nombre
  useEffect(() => {
    const resultado = productos.filter((p) =>
      (p.nombre || "").toLowerCase().includes(busqueda.toLowerCase())
    );
    setFiltrados(resultado);
  }, [busqueda, productos]);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <>
      {/* 🔍 BUSCADOR */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar producto por nombre..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      {/* 🧁 LISTADO */}
      <div className="row g-3">
        {filtrados.length === 0 && (
          <p className="text-muted">No se encontraron productos.</p>
        )}

        {filtrados.map((p) => (
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
    </>
  );
}
