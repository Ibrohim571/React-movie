import { useState } from "react"

export default function FunctionProp() {
  let [one, setone] = useState(1);
  function decrement() {
    setone((one) => one + 1)
    setone((one) => one + 1)
  }
  function increment() {
    setone(one - 1)
  }
  return (
    <div>
      <p>{one}</p>
      <button onClick={() => decrement()}>plus</button>
      <button onClick={() => increment()}>minus</button>
    </div>
  )
}