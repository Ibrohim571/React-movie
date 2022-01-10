import React, {useReducer} from 'react';
import reduser from '../reduser'
let btnArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const tugma = btnArray.map(index => {
  return (
    <button className='btn btn-info' key={`btn${index}`} id={index}>{index}</button>
  )
})
let initialState = {
  natija: 0
}

function Press() {

  let [{natija}, dispatch] = useReducer(reduser, initialState)

  return (
    <div>
      {tugma}
      <button onClick={(id = 2) => dispatch({type: "ADDNUMBER", payload: id})}>sdss</button>
      <p>{natija}</p>
    </div>
  );
}

export default Press;