import { createContext, useReducer } from "react";
import reduser from "./reduser";

export const Kalkulyator = createContext()

const initialState = {
  natija: 0
}

export const ContextProvider = ({child}) => {

  const [value, dispatch] = useReducer(reduser, initialState)

  value.pressFunction = (id) => {
    dispatch({type: "ADDNUMBER", payload: id})
  }

  return(
    <Kalkulyator.Provider value={value}>
      {child}
    </Kalkulyator.Provider>
  )
}