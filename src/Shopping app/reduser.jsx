import { toast } from "react-toastify"

export default function reduser(state, {type, payload}) {
  switch(type) {

    case "ADD_TO_BASKET": {
      const itemIndex = state.order.findIndex
        ((orderItem) => orderItem.id == payload.id)
      let newOrder = null

      if(itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1
        }
      newOrder = [...state.order, newItem]
    }
    else {
      newOrder = state.order.map((orderItem, index) => {
        if(index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1
          }
        } else {
          return orderItem
        }
      })
    }
    toast.success(`Adding product name ${payload.name}`)
    return {
      ...state,
      order: newOrder
    }
  }

  case "INCREMENT": {
    return {
      ...state,
      order: state.order.map(elem => {
        if(elem.id === payload.id) {
          const newQuantity = elem.quantity + 1
          return {
            ...elem,
            quantity: newQuantity
          }
        } else {
          return elem
        }
      })
    }
  }

  case "DECREMENT": {
    return {
      ...state,
      order: state.order.map(elem => {
        if(elem.id === payload.id) {
          const newQuantity = elem.quantity - 1
          return {
            ...elem,
            quantity: newQuantity >= 0 ? newQuantity : 0
          }
        } else {
          return elem
        }
      })
    }
  }

  case "VISIBILITY_CART": {
    return {
      ...state,
      isVisibleCart: (!state.isVisibleCart)
    }
  }

  case "REMOVE_BASKET": {
    toast.error(`Remove produve`)
    return {
      ...state,
      order: state.order.filter(elem => elem.id !== payload.id),
    }
  }

  case "SETGOODS": {
    return {
      ...state,
      goods: payload || [],
      isloading: false
    }
  }

    default:
      return state
  }
}