import {useState, useEffect} from 'react';

function Data(props) {
  const [uses, setUsers] = useState([])
  const [text, setText] = useState()
  useEffect(() => {
    fetch('http://localhost:4000/posts')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  const submitForm = async () => {
    const newObj = await {
      id: Math.floor(Math.random()*1000 + 10),
      title: text,
      author: "Ibrohim"
    }
    fetch('http://localhost:4000/posts', {
      method: "POST",
      body: JSON.stringify(newObj),
      headers: {
        "content-type": "application/json",
      },
    })
    .then(data => console.log(data))
  }

  return (
    <div>
      {uses.map(item => (<p key={item.id}>{item.title}</p>))}
      <div className='form-group'>
        <input 
          type="text" id="text"
          onChange={(e) => {setText(e.target.value)}} />
        <button className='btn' onClick={submitForm}>Submit</button>
      </div>
    </div>
  );
}

export default Data;