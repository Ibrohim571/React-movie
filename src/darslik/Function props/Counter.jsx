import React, {useEffect, useReducer } from "react";
import reduser from './redux/reduser'

function getItemCount() {
  let getCount = localStorage.getItem('count')
  return getCount ? +getCount : 0
}

export default function ComponentUse() {

  let [{count, isCouting}, dispatch] = useReducer(reduser, {count: getItemCount(), isCouting: false})

  useEffect(() => {
    localStorage.setItem('count', count.toString())
  }, [count])

  useEffect(() => {
    let timerId = 0
    if(isCouting) {
      timerId = setInterval(() => {
        dispatch({type: 'TICK'})
      },1000)
    }
    return () => {  
      console.log("wiill mount");
      timerId && clearInterval(timerId)
      timerId = null;
    }
  }, [isCouting])

  return(
    <div>
      <h6>{count}</h6>
      {(isCouting)?
      <button onClick = {() => dispatch({type: "STOP"})}>Stop</button>
      :<button onClick = {() => dispatch({type: "START"})}>Start</button>
  }
  <button onClick = {() => dispatch({type: "RESET"})}>Restart</button>
    </div>
  )
}
