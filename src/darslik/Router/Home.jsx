import React, {useState, useEffect} from 'react';
import { getAllcatigories } from './api';
import CardList from './elements/CardList';
import Search from './elements/Search';
import Loader from './Loader';
import { useLocation, useHistory } from 'react-router-dom';
function Home() {
  const [categories, setCategories] = useState([])
  const [filterCategories, setFilterCategories] = useState([])
  const {pathname, search} = useLocation()
  const {push} = useHistory()

  const filterCategory = (str) => {
    setFilterCategories(categories.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase())))
    push({
      pathname,
      search: `?search=${str}`
    })
  }

  useEffect(() => {
    setTimeout(() => {
      getAllcatigories().then(data => {
        setCategories(data.categories)
        setFilterCategories( search ?
          data.categories
          .filter(item => item.strCategory
            .toLowerCase()
            .includes(search.split('=')[1].toLowerCase())): data.categories)
      })
    }, 1500);
  }, [search])

  return (
    <div className='menu'>
      <Search cd={filterCategory} />
      {!categories.length ? <Loader/> : <CardList categories = {filterCategories} /> }
    </div>
  );
}

export default Home;