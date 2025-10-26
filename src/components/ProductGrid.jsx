import React from 'react'
import ProductCard from './ProductCard.jsx'

const productos = [
  {id:1, name:'Torta Tres Leches', price:12990, img:'https://via.placeholder.com/400x300?text=Tres+Leches'},
  {id:2, name:'Kuchen Frambuesa', price:9990, img:'https://via.placeholder.com/400x300?text=Kuchen'},
  {id:3, name:'Pie de Limón', price:8990, img:'https://via.placeholder.com/400x300?text=Pie+Lim%C3%B3n'},
  {id:4, name:'Milhojas', price:10990, img:'https://via.placeholder.com/400x300?text=Milhojas'},
  {id:5, name:'Torta Chocolate', price:13990, img:'https://via.placeholder.com/400x300?text=Chocolate'},
  {id:6, name:'Cheesecake Frutilla', price:11990, img:'https://via.placeholder.com/400x300?text=Cheesecake'},
  {id:7, name:'Brazo de Reina', price:7990, img:'https://via.placeholder.com/400x300?text=Brazo'},
  {id:8, name:'Berlines', price:6990, img:'https://via.placeholder.com/400x300?text=Berlines'}
]

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
