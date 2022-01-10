import React, {useState, useEffect, useRef} from "react";


export default function UseHooks() {
  let data = new Date();
  const [count, setCount] = useState({
    text: "Tentak",
    data: data.getTime()
  })
  let nimadir = useRef(1)
  const [value, setValue] = useState(1)
  function Increment() {
    setCount({...count, data: data.getTime()})
    setValue(value + 1)
  }

  useEffect(() => {
    nimadir.current = value;
  })

  return (
    <div>
      <p>{value}</p>
      <button onClick={Increment}>Bosing</button>
      <pre>{nimadir.current}</pre>
    </div>
  )
}