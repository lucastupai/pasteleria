import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CartProvider, useCart } from '../context/CartContext.jsx'

function AddButton() {
  const { dispatch, state } = useCart()
  const totalQty = state.items.reduce((a, i) => a + i.qty, 0)
  return (
    <div>
      <button onClick={() => dispatch({ type: 'ADD_ITEM', payload: { id: 1, name: 'X', price: 100 } })}>
        Agregar
      </button>
      <span data-testid="conteo">Conteo: {totalQty}</span>
    </div>
  )
}

describe('CartContext', () => {
  it('agrega items', async () => {
    const user = userEvent.setup()
    render(
      <CartProvider>
        <AddButton />
      </CartProvider>
    )
    const label = screen.getByTestId('conteo')
    expect(label.textContent).toContain('Conteo: 0')
    await user.click(screen.getByText('Agregar'))
    expect(label.textContent).toContain('Conteo: 1')
  })
})
