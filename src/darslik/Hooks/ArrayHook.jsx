import React from 'react';

function ArrayHook(props) {
  let array = props.massiv(3)
  console.log("dfdffd")
  return (
    <div>
      <ul>{
        array.map((index) => <li key={index}>{index}</li>)
      }</ul>
    </div>
  );
}

export default ArrayHook;