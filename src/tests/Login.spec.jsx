import React from 'react'
import ReactDOM from 'react-dom/client'
import { act } from 'react'
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import Login from '../pages/Login.jsx'

afterEach(()=>{ const h=document.getElementById('test-root'); if(h) h.remove(); localStorage.clear() })
function mount(ui){
  const prev=document.getElementById('test-root'); if(prev) prev.remove()
  const host=document.createElement('div'); host.id='test-root'; document.body.appendChild(host)
  act(()=>{ ReactDOM.createRoot(host).render(ui) })
  return host
}

describe('Login', ()=>{
  it('muestra error si el usuario no existe', async ()=>{
    // un usuario distinto para forzar el error
    localStorage.setItem('usuarios', JSON.stringify([{email:'a@a.com', password:'123456', nombre:'Ana'}]))
    mount(<Login/>)
    const user = userEvent.setup()
    await user.type(screen.getByLabelText('Email'), 'b@b.com')
    await user.type(screen.getByLabelText('Contraseña'), '123456')
    await user.click(screen.getByText('Ingresar'))
    expect(screen.getByText(/incorrectos/i)).toBeTruthy()
  })
})
