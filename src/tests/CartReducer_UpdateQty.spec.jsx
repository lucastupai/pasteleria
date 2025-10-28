import React from 'react'
import ReactDOM from 'react-dom/client'
import { act } from 'react'
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import { CartProvider, useCart } from '../context/CartContext.jsx'

afterEach(()=>{ const h=document.getElementById('test-root'); if(h) h.remove() })
function mount(ui){
  const prev=document.getElementById('test-root'); if(prev) prev.remove()
  const host=document.createElement('div'); host.id='test-root'; document.body.appendChild(host)
  act(()=>{ ReactDOM.createRoot(host).render(ui) })
  return host
}

function Comp(){
  const { state, dispatch } = useCart()
  return (
    <div>
      <button onClick={()=>dispatch({type:'ADD_ITEM', payload:{id:1, name:'X', price:100}})}>Add</button>
      <button onClick={()=>dispatch({type:'UPDATE_QTY', payload:{id:1, qty:5}})}>Set5</button>
      <span data-testid="qty">{state.items.find(i=>i.id===1)?.qty ?? 0}</span>
    </div>
  )
}

describe('CartReducer UPDATE_QTY', ()=>{
  it('actualiza cantidad a 5', async ()=>{
    mount(<CartProvider><Comp/></CartProvider>)
    const user = userEvent.setup()
    await user.click(screen.getByText('Add'))
    await user.click(screen.getByText('Set5'))
    expect(screen.getByTestId('qty').textContent).toBe('5')
  })
})
