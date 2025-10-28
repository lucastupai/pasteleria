import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { act } from 'react'
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import Checkout from '../pages/Checkout.jsx'
import { CartProvider, useCart } from '../context/CartContext.jsx'

afterEach(()=>{ const h=document.getElementById('test-root'); if(h) h.remove(); localStorage.clear() })

function mount(ui){
  const prev=document.getElementById('test-root'); if(prev) prev.remove()
  const host=document.createElement('div'); host.id='test-root'; document.body.appendChild(host)
  act(()=>{ ReactDOM.createRoot(host).render(ui) })
  return host
}

// Semilla el contexto con 1 ítem de $10000 al montar
function SeedCart({ children }){
  const { dispatch } = useCart()
  useEffect(()=>{
    dispatch({ type:'ADD_ITEM', payload:{ id:1, name:'X', price:10000 } })
  }, [dispatch])
  return children
}

describe('Checkout con descuento', ()=>{
  it('aplica 10% si hay usuario logueado', async ()=>{
    // usuario logueado
    localStorage.setItem('usuarioActual', JSON.stringify({ nombre:'Carla', email:'c@c.com' }))

    mount(
      <CartProvider>
        <SeedCart>
          <Checkout/>
        </SeedCart>
      </CartProvider>
    )

    // Verifica que aparece el bloque de descuento
    expect(screen.getByText(/Descuento usuario registrado/i)).toBeTruthy()

    const alertBox = document.querySelector('#test-root .alert')
    expect(alertBox).toBeTruthy()
    // Normaliza espacios y valida con regex que admite saltos de línea entre "$" y "9000"
    const text = alertBox.textContent
    expect(text).toMatch(/Total final:\s*\$\s*9000/)

    // Completa lo mínimo para habilitar el botón y no crashear al enviar
    const user = userEvent.setup()
    await user.type(screen.getByLabelText('Nombre'), 'Carla')
    await user.type(screen.getByLabelText('Dirección'), 'Calle 123')
    const btn = screen.getByRole('button', { name: /pagar/i })
    expect(btn.disabled).toBeFalse()
  })
})
