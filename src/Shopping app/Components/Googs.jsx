import { useEffect, useContext } from 'react';
import { ShopContext } from '../context';
import Loader from './Loader';
import {API_KEY, API_URL} from '../config'
import GoodsList from './GoodsList';
import Cart from './Cart';
import CartList from './CartList';
import { toast } from 'react-toastify';

function Googs(props) {
  const {goods, setGoods, isLoading, order, isVisibleCart} = useContext(ShopContext)

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        'Authorization': API_KEY
      }
    }).then(res => res.json())
    .then(data => {
      setGoods(data.featured)
    })
  }, [])

  return (
    <div className='menu'>
      {isLoading ? <Loader /> : <GoodsList />}
      <Cart quantity = {order.length}/>
      {isVisibleCart && <CartList />}
    </div>
  );
}

export default Googs;