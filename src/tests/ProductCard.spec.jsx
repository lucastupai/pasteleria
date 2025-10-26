import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import ProductCard from '../components/ProductCard.jsx'
import { CartProvider } from '../context/CartContext.jsx'

describe('ProductCard', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  it('muestra nombre y precio', () => {
    render(
      <CartProvider>
        <ProductCard id={1} name="Torta" price={12990} img="" />
      </CartProvider>
    )
    expect(screen.getByText('Torta')).toBeTruthy()
    expect(screen.getByText(/\$.*12990/)).toBeTruthy()
  })

  it('agrega al carrito al hacer click', async () => {
    const user = userEvent.setup()
    render(
      <CartProvider>
        <ProductCard id={1} name="Torta" price={12990} img="" />
      </CartProvider>
    )
    // 🔹 buscamos el botón por texto o aria-label
    const boton = screen.getByRole('button', { name: /agregar/i })
    await user.click(boton)
    expect(boton).toBeTruthy()
  })
})
