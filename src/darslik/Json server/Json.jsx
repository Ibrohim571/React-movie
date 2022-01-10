import {useEffect} from 'react';
// import server from "./api.json"
useEffect(() => {
  fetch('http://localhost:3000')
  .then(res => res.json())
  .then(users => {console.log(users)})
}, [])

function Json(props) {
  return (
    <div>

    </div>
  );
}

export default Json;