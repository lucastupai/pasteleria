import React from 'react'
import ReactDOM from 'react-dom/client'
import { act } from 'react'
import { screen } from '@testing-library/dom'
import ProductGrid from '../components/ProductGrid.jsx'
import { CartProvider } from '../context/CartContext.jsx'

afterEach(()=>{ const h=document.getElementById('test-root'); if(h) h.remove() })
function mount(ui){
  const prev=document.getElementById('test-root'); if(prev) prev.remove()
  const host=document.createElement('div'); host.id='test-root'; document.body.appendChild(host)
  act(()=>{ ReactDOM.createRoot(host).render(ui) })
  return host
}

describe('ProductGrid', ()=>{
  it('renderiza al menos 4 cards', ()=>{
    mount(<CartProvider><ProductGrid/></CartProvider>)
    const cards = document.querySelectorAll('.card')
    expect(cards.length).toBeGreaterThan(3)
  })
})
