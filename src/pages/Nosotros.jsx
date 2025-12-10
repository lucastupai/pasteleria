import React from 'react';

export default function Nosotros() {
  return (
    <section className="py-4">
      <h1 className="mb-3">Nosotros</h1>

      <p>
        La <strong>Pastelería 1000 Sabores</strong> nació hace cinco décadas con el sueño de convertirse
        en un referente de la repostería chilena. Desde sus inicios, se distinguió por combinar recetas
        tradicionales con innovaciones creativas, ofreciendo productos que rápidamente conquistaron el
        paladar de sus clientes.
      </p>

      <p>
        Uno de los hitos más importantes en su trayectoria ocurrió en 1995, cuando la pastelería
        participó en la creación de la <strong>torta más grande del mundo</strong>, un evento que le
        permitió formar parte del <strong>Récord Guinness</strong>. Este logro no solo la hizo conocida
        a nivel nacional, sino que también la posicionó como un símbolo de excelencia y orgullo para la
        repostería chilena.
      </p>

      <p>
        A lo largo de los años, la empresa ha mantenido un fuerte compromiso con la calidad, la
        tradición y la innovación, adaptándose a las nuevas tendencias del mercado. Su propuesta ha sido
        siempre entregar un producto fresco, con sabores auténticos y elaborados con dedicación
        artesanal.
      </p>

      <p>
        Hoy, al cumplir <strong>50 años de historia</strong>, Pastelería 1000 Sabores celebra su legado
        y al mismo tiempo mira hacia el futuro. Consciente de los cambios en los hábitos de consumo y la
        importancia del comercio digital, la pastelería busca renovar su sistema de ventas online. Su
        objetivo es ofrecer a los clientes una experiencia de compra moderna, ágil y accesible,
        manteniendo intacta la esencia que la ha acompañado durante medio siglo.
      </p>

      <p className="mb-0">
        De esta manera, Pastelería 1000 Sabores continúa consolidándose como un ícono de la repostería
        en Chile, uniendo tradición y tecnología para seguir endulzando generaciones.
      </p>
            {/* Banner vintage */}
      <div className="text-center mt-4">
        <img
          src="https://static.vecteezy.com/system/resources/previews/009/926/240/large_2x/banner-with-cooking-kneading-dough-beating-breaking-eggs-seasoning-graphics-free-vector.jpg"
          alt="Pastelería 1000 Sabores - Banner vintage"
          className="img-fluid rounded-3 shadow"
          style={{
            maxHeight: '350px',
            objectFit: 'cover',
            width: '100%',
          }}
        />
      </div>

    </section>
  );
}
