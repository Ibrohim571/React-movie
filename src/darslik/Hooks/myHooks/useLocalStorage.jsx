import {useEffect, useState} from 'react';

function useLocalStorage(key, indexPrev) {

  const get = () => {
    let item = +localStorage.getItem(key)
    return item ? item : indexPrev
  }

  let [value, setValue] = useState(get)

  useEffect(() => {
    localStorage.setItem(key, value)
  }, [value])

  return [value, setValue]
}

export default useLocalStorage;