import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const usuario = JSON.parse(localStorage.getItem('usuarioActual') || 'null');

  return (
    <section className="py-4">
    {/* Bloque de bienvenida */}
    <div className="mb-4">
        <h1 className="mb-2">
          Bienvenido{usuario ? `, ${usuario.nombre}` : ''} 👋
        </h1>

        {usuario ? (
          <p className="text-success">
            Gracias por ser parte de <strong>Pastelería 1000 Sabores</strong>. 
            Recuerda que tienes un <strong>10% de descuento</strong> en tu próxima compra por ser cliente registrado.
          </p>
        ) : (
          <p className="text-muted">
            Regístrate o inicia sesión para obtener un <strong>10% de descuento</strong> en tu primera compra.
          </p>
        )}
      </div>

      {/* Presentación corta de la pastelería */}
      <div className="row align-items-center mb-4">
        <div className="col-md-6 mb-3">
          <h2 className="h4">Pastelería 1000 Sabores</h2>
          <p>
            Somos una pastelería chilena con más de 50 años de historia, reconocida por nuestra 
            participación en el <strong>Récord Guinness</strong> por la torta más grande del mundo.
          </p>
          <p>
            Combinamos recetas tradicionales con propuestas modernas para que puedas encontrar tortas,
            postres y productos especiales para cada celebración, ahora también a través de nuestra
            tienda online.
          </p>

          <div className="d-flex gap-2 mt-3">
            <Link to="/productos" className="btn btn-primary me-2">
              Ver productos
            </Link>
            <Link to="/nosotros" className="btn btn-outline-secondary">
              Conócenos más
            </Link>
          </div>
        </div>

        <div className="col-md-6 mb-3 text-center">
          {/* Puedes cambiar esta imagen por una real luego */}
          <img
            src="https://via.placeholder.com/500x300?text=Pasteleria+1000+Sabores"
            alt="Pastelería 1000 Sabores"
            className="img-fluid rounded-3 shadow"
          />
        </div>
      </div>

      {/* Ventajas / mini características */}
      <div className="row g-3">
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="h6 card-title">Calidad artesanal</h3>
              <p className="card-text">
                Productos preparados con dedicación y recetas tradicionales, ideales para cumpleaños,
                bodas y celebraciones familiares.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="h6 card-title">Compra online</h3>
              <p className="card-text">
                Explora nuestro catálogo, arma tu carrito y completa tu pedido de forma rápida y sencilla
                desde cualquier dispositivo.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="h6 card-title">Descuentos especiales</h3>
              <p className="card-text">
                Beneficios para usuarios registrados y promociones pensadas para celebrar nuestros 50 años
                de historia en la repostería chilena.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
