import React, { createContext, useReducer, useContext, useEffect } from 'react'

const CartContext = createContext()
const initialState = JSON.parse(localStorage.getItem('cart_state') || '{"items":[]}')

function reducer(state, action){
  switch(action.type){
    case 'ADD_ITEM': {
      const exists = state.items.find(i => i.id === action.payload.id)
      if (exists){
        return {
          ...state,
          items: state.items.map(i => i.id === action.payload.id ? {...i, qty: i.qty + 1} : i)
        }
      }
      return {...state, items: [...state.items, {...action.payload, qty: 1}]}
    }
    case 'UPDATE_QTY': {
      return {...state, items: state.items.map(i => i.id === action.payload.id ? {...i, qty: action.payload.qty} : i)}
    }
    case 'REMOVE_ITEM': {
      return {...state, items: state.items.filter(i => i.id !== action.payload.id)}
    }
    case 'CLEAR': return { items: [] }
    default: return state
  }
}

export function CartProvider({children}){
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(()=>{
    localStorage.setItem('cart_state', JSON.stringify(state))
  }, [state])
  const total = state.items.reduce((acc, i)=> acc + i.price * i.qty, 0)
  return <CartContext.Provider value={{state, dispatch, total}}>{children}</CartContext.Provider>
}

export function useCart(){
  return useContext(CartContext)
}
