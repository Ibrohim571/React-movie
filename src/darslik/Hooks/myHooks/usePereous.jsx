
import {useEffect, useRef} from 'react';

function usePereous(value) {

  let prefRef = useRef()

  useEffect(() => {
    prefRef.current = value
  })

  return prefRef.current
}

export default usePereous;