import React, {useState, useCallback} from 'react';
import ArrayHook from './ArrayHook';

function UseMemo(props) {
  const [color, setColor] = useState(false)
  const [number, setNumber] = useState(1)

  const rang = color ? 'text-info' : 'text-danger'

  const Increment = () => {
    setNumber(prev => prev + 1)
  }

  const massiv = useCallback((arrayIndex) => {
    console.log("SDffsd")
    return new Array(number).fill("").map((_, index) => `Element ${index + 1} ${arrayIndex}`)
  }, [number]);
  
  return (
    <div>
      <h5 className={rang}>Count {number}</h5>
      <button onClick={Increment}>Increment</button>
      <ArrayHook massiv = {massiv}/>
      <button onClick={() => setColor(!color)}>Increment</button>
    </div>
  );
}

export default UseMemo;