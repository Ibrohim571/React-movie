import { useState, useEffect, useRef } from "react";
import FunctionProp from "./FunctionProp";

export default function useEffectvsRef() {

  const [isHave, setHave] = useState(false)
  const inputRef = useRef()
  function focusInput() {
    inputRef.current.focus()
  }

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  function onToggleHave() {
    setHave(!isHave)
  }
  useEffect(() => {
    console.log("sasasa");
    return(
      console.log("sasda") // componentWillUnmount
    )
  }, [isHave]) // componentDidUpdate vs componentDidMount

  return(
    <div>
      <p>hello</p>
      {isHave ? <FunctionProp />: ''}
      <button onClick={onToggleHave}>salom</button>

      <div>
        <input type="text" ref={inputRef} />
        <button onClick={focusInput}>Focus</button>
      </div>
    </div>
  )
}