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
  const count = state.items.reduce((a,i)=>a+i.qty,0)
  return (
    <div>
      <button onClick={()=>dispatch({type:'ADD_ITEM', payload:{id:1, name:'X', price:100}})}>Add</button>
      <button onClick={()=>dispatch({type:'REMOVE_ITEM', payload:{id:1}})}>Remove</button>
      <button onClick={()=>dispatch({type:'CLEAR'})}>Clear</button>
      <span data-testid="count">{count}</span>
    </div>
  )
}

describe('CartReducer REMOVE & CLEAR', ()=>{
  it('remove quita y clear vacía', async ()=>{
    mount(<CartProvider><Comp/></CartProvider>)
    const user = userEvent.setup()
    await user.click(screen.getByText('Add'))
    expect(screen.getByTestId('count').textContent).toBe('1')
    await user.click(screen.getByText('Remove'))
    expect(screen.getByTestId('count').textContent).toBe('0')
    await user.click(screen.getByText('Add'))
    await user.click(screen.getByText('Clear'))
    expect(screen.getByTestId('count').textContent).toBe('0')
  })
})
