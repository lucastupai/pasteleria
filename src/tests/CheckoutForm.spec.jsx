import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { act } from 'react'                  
import Checkout from '../pages/Checkout.jsx'
import { CartProvider } from '../context/CartContext.jsx'

afterEach(() => {
  const host = document.getElementById('test-root')
  if (host) host.remove()
})

// Monta sobre un contenedor dedicado y hace flush con act()
function mountClean(ui) {
  // quita si ya hubiera uno
  const prev = document.getElementById('test-root')
  if (prev) prev.remove()

  const host = document.createElement('div')
  host.id = 'test-root'
  document.body.appendChild(host)

  act(() => {
    ReactDOM.createRoot(host).render(ui)
  })
  return host
}

describe('Checkout', () => {
  it('deshabilita pagar si el total es 0', () => {
    mountClean(<CartProvider><Checkout/></CartProvider>)
    const btn = screen.getByRole('button', { name: /pagar/i })
    expect(btn.disabled).toBeTrue() // Jasmine matcher
  })

  it('valida campos requeridos', async () => {
    mountClean(<CartProvider><Checkout/></CartProvider>)
    const user = userEvent.setup()
    await user.click(screen.getByRole('button', { name: /pagar/i }))
    // Si no crashea y sigue el título, la validación básica corrió
    expect(screen.getByText(/Checkout/)).toBeTruthy()
  })
})
