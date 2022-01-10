import {useState} from 'react';

function Search({cd}) {
  const [search, setSearch] = useState('')

  const submitEnter = (e) => {
    if(e.key == "Enter") {
      submitForm()
    }
  }

  const submitForm = () => {
    cd(search)
  }

  return (
    <div>
      <input type="text"
        placeholder='Search...'
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => submitEnter(e)}
      />
      <button className='btn' onClick={submitForm}>Search</button>
    </div>
  );
}

export default Search;