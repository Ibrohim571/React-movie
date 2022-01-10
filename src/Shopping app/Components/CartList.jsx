import {useContext} from 'react';
import { ShopContext } from '../context';
import CartItem from './CartItem';

const totalSum = (massiv) => {
  let total = 0
  for(let i = 0; massiv.length > i; i++) {
    total += massiv[i].price * massiv[i].quantity;
  }
  return total
}

function CartList() {
  const {order, toggleVisileCart} = useContext(ShopContext)
  return (
    <div className='fatherBasket'>
      <ul className="collection basket-list">
        <li className="collection-item active">Colection</li>
        {order.length ? order.map(orderItem => {
          return <CartItem
            key = {orderItem.id}
            {...orderItem}/>
        }): <li className='collection-item'>Backet is Empty</li>}
        <li className="collection-item active">Total Shopping: {totalSum(order)}</li>
        <i className='material-icons basket-close' onClick={toggleVisileCart}>close</i>
      </ul>

    </div>
  );
}

export default CartList;