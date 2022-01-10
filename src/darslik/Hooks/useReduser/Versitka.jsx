
import React, {useReducer} from 'react';
import reduser from './reduser.jsx'
import './styleAx.css'
function Versitka(props) {
  const [{r, g, b}, dispatch] = useReducer(reduser, {
    r: 20,
    g: 20,
    b: 20,
  })
  return (
    <div>
      <div className='axmoq' style={{'backgroundColor': `rgb(${r}, ${g}, ${b})`}}></div>

      <div className='btn-group'>
        <p>R</p>
        <button className='btn btn-danger' onClick={() => dispatch({type: 'qizilD'})}>+</button>
        <button className='btn btn-danger' onClick={() => dispatch({type: 'qizilI'})}>-</button>
      </div>

      <div className='btn-group'>
        <p>G</p>
        <button className='btn btn-success' onClick={() => dispatch({type: 'yashilD'})}>+</button>
        <button className='btn btn-success' onClick={() => dispatch({type: 'yashilI'})}>-</button>
      </div>

      <div className='btn-group'>
        <p>R</p>
        <button className='btn btn-info' onClick={() => dispatch({type: 'kukD'})}>+</button>
        <button className='btn btn-info' onClick={() => dispatch({type: 'kukI'})}>-</button>
      </div>
    </div>
  );
}

export default Versitka;