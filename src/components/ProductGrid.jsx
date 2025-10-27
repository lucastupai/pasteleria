import React from 'react'
import ProductCard from './ProductCard.jsx'

const productos = [
  {
    id: 1,
    codigo: "TC001",
    categoria: "Tortas Cuadradas",
    name: "Torta Cuadrada de Chocolate",
    price: 45000,
    img: "https://i.pinimg.com/1200x/22/b5/11/22b511a40455afba820addadb82d37dc.jpg",
    desc: "Deliciosa torta de chocolate con capas de ganache y un toque de avellanas. Personalizable con mensajes especiales."
  },
  {
    id: 2,
    codigo: "TC002",
    categoria: "Tortas Cuadradas",
    name: "Torta Cuadrada de Frutas",
    price: 50000,
    img: "https://i.pinimg.com/736x/45/74/4a/45744a8f0d9be5fe312c692426960c5d.jpg",
    desc: "Una mezcla de frutas frescas y crema chantilly sobre un suave bizcocho de vainilla, ideal para celebraciones."
  },
  {
    id: 3,
    codigo: "TT001",
    categoria: "Tortas Circulares",
    name: "Torta Circular de Vainilla",
    price: 40000,
    img: "https://i.pinimg.com/1200x/4c/09/19/4c0919fc733981b0bdc947b366e22352.jpg",
    desc: "Bizcocho de vainilla clásico relleno con crema pastelera y cubierto con un glaseado dulce, perfecto para cualquier ocasión."
  },
  {
    id: 4,
    codigo: "TT002",
    categoria: "Tortas Circulares",
    name: "Torta Circular de Manjar",
    price: 42000,
    img: "https://i.pinimg.com/736x/22/b7/30/22b7305c7a1aa7f2778ba86f206df70e.jpg",
    desc: "Torta tradicional chilena con manjar y nueces, un deleite para los amantes de los sabores dulces y clásicos."
  },
  {
    id: 5,
    codigo: "PI001",
    categoria: "Postres Individuales",
    name: "Mousse de Chocolate",
    price: 5000,
    img: "https://images.aws.nestle.recipes/original/2024_10_18T11_53_16_badun_images.badun.es_4ed41e942636_mousse_de_chocolate_intenso.jpg",
    desc: "Postre individual cremoso y suave, hecho con chocolate de alta calidad, ideal para los amantes del chocolate."
  },
  {
    id: 6,
    codigo: "PI002",
    categoria: "Postres Individuales",
    name: "Tiramisú Clásico",
    price: 5500,
    img: "https://i.pinimg.com/736x/50/b0/d1/50b0d1231e7471ac5ab7e20b9441c52f.jpg",
    desc: "Un postre italiano individual con capas de café, mascarpone y cacao, perfecto para finalizar cualquier comida."
  },
  {
    id: 7,
    codigo: "PSA001",
    categoria: "Productos Sin Azúcar",
    name: "Torta Sin Azúcar de Naranja",
    price: 48000,
    img: "https://mozart.cl/wp-content/uploads/2025/05/88_MIF_2420_Torta_de_Naranja_Sin_Azucar_Anadida_1080x1080.jpg",
    desc: "Torta ligera y deliciosa, endulzada naturalmente, ideal para quienes buscan opciones más saludables."
  },
  {
    id: 8,
    codigo: "PSA002",
    categoria: "Productos Sin Azúcar",
    name: "Cheesecake Sin Azúcar",
    price: 47000,
    img: "https://i.pinimg.com/736x/df/d6/2a/dfd62a4e8845ad076f623df8ea4fd49e.jpg",
    desc: "Suave y cremoso, este cheesecake es una opción perfecta para disfrutar sin culpa."
  },
  {
    id: 9,
    codigo: "PT001",
    categoria: "Pastelería Tradicional",
    name: "Empanada de Manzana",
    price: 3000,
    img: "https://i.pinimg.com/736x/b4/e4/7d/b4e47d6e777bfde9e072f2ffe096c1ef.jpg",
    desc: "Pastelería tradicional rellena de manzanas especiadas, perfecta para un dulce desayuno o merienda."
  },
  {
    id: 10,
    codigo: "PT002",
    categoria: "Pastelería Tradicional",
    name: "Tarta de Santiago",
    price: 6000,
    img: "https://i.pinimg.com/736x/44/b2/bf/44b2bf05fe5ee0a1bc568afa1642fd18.jpg",
    desc: "Tradicional tarta española hecha con almendras, azúcar y huevos, una delicia para los amantes de los postres clásicos."
  },
  {
    id: 11,
    codigo: "PG001",
    categoria: "Productos Sin Gluten",
    name: "Brownie Sin Gluten",
    price: 4000,
    img: "https://i.pinimg.com/736x/60/f5/a5/60f5a5ce8775a0fcc170194b69793597.jpg",
    desc: "Rico y denso, este brownie es perfecto para quienes necesitan evitar el gluten sin sacrificar el sabor."
  },
  {
    id: 12,
    codigo: "PG002",
    categoria: "Productos Sin Gluten",
    name: "Pan Sin Gluten",
    price: 3500,
    img: "https://guiaceliacos.com/wp-content/uploads/2019/02/Pan-casero-sin-gluten_3.jpg",
    desc: "Suave y esponjoso, ideal para sándwiches o para acompañar cualquier comida."
  },
  {
    id: 13,
    codigo: "PV001",
    categoria: "Productos Veganos",
    name: "Torta Vegana de Chocolate",
    price: 50000,
    img: "https://veganlife.com.co/wp-content/uploads/2023/03/cake-chocolate-y-arandanos-scaled.jpg",
    desc: "Torta de chocolate húmeda y deliciosa, hecha sin productos de origen animal, perfecta para veganos."
  },
  {
    id: 14,
    codigo: "PV002",
    categoria: "Productos Veganos",
    name: "Galletas Veganas de Avena",
    price: 4500,
    img: "https://i.pinimg.com/736x/81/11/31/811131eff15a1a7ca63b1a4a5879b359.jpg",
    desc: "Crujientes y sabrosas, estas galletas son una excelente opción para un snack saludable y vegano."
  },
  {
    id: 15,
    codigo: "TE001",
    categoria: "Tortas Especiales",
    name: "Torta Especial de Cumpleaños",
    price: 55000,
    img: "https://i.pinimg.com/736x/8a/b1/b9/8ab1b9e788d8a27585f43d2c8f3a4773.jpg",
    desc: "Diseñada especialmente para celebraciones, personalizable con decoraciones y mensajes únicos."
  },
  {
    id: 16,
    codigo: "TE002",
    categoria: "Tortas Especiales",
    name: "Torta Especial de Boda",
    price: 60000,
    img: "https://i.pinimg.com/736x/cf/2a/0a/cf2a0a6e1f8ed22ef6f06f4c5cf4198d.jpg",
    desc: "Elegante y deliciosa, esta torta está diseñada para ser el centro de atención en cualquier boda."
  }
];


export default function ProductGrid(){
  return (
    <div className="row g-3">
      {productos.map(p=> (
        <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
          <ProductCard {...p} />
        </div>
      ))}
    </div>
  )
}
