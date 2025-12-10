import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-light border-top mt-auto">
      <div className="container py-3 text-center small text-muted">
        <p className="mb-1">
          Pastelería Mil Sabores &copy; {new Date().getFullYear()}
        </p>
        <p className="mb-0">
          Horario: Lunes a sábado 10:00–20:00 · WhatsApp: +56 9 1234 5678 · Instagram: @pasteleriamilsabores
        </p>
      </div>
    </footer>
  );
}
