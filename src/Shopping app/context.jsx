import {createContext, useReducer} from 'react'
import reduser from './reduser'

export const ShopContext = createContext()

const initialState = {  // boshlangich statelar
  goods: [],
  isloading: true,
  order: [],
  isVisibleCart: false
}

export const ContextProvider = ({children}) => {
  const [value, dispatch] = useReducer(reduser, initialState)

  value.addToBasket = (item) => {
    dispatch({type: "ADD_TO_BASKET", payload: item})
  }

  value.incrementBasketList = (itemID) => {
    dispatch({type: "INCREMENT", payload: {id: itemID}})
  }

  value.decrementBasketList = (itemID) => {
    dispatch({type: "DECREMENT", payload: {id: itemID}})
  }

  value.toggleVisileCart = () => {
    dispatch({type: "VISIBILITY_CART"})
  }

  value.removeBasketList = (itemID) => {
    dispatch({type: "REMOVE_BASKET", payload: {id: itemID}})
  }

  value.setGoods = (data) => {
    dispatch({type: "SETGOODS", payload: data})
  }

  return(
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  )
}