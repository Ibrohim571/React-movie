import React from 'react';
import Ikkinchi from './Ikkinchi';

export default (props) => {
    return (
     <>
          <ul>
               {props.todos.map(todo => {
                    return <Ikkinchi todo={todo} />
               })}    
          </ul>        
     </>
    )
} 