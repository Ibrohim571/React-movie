import React, {useContext} from 'react';
import { ShopContext } from '../context';

function CartItem(props) {
  const {id, name, price, quantity} = props

  const {removeBasketList, incrementBasketList, decrementBasketList} = useContext(ShopContext)
  
  return (
      <li className='collection-item'>
        {name} x {quantity} = {price * quantity} <b>$</b>
        <span className='secondary-content' onClick={() => {incrementBasketList(id)}}>
          <i className='material-icons basket-increment basket-delete'>plus_one</i>
        </span>
        <span className='secondary-content' onClick={() => {decrementBasketList(id)}}>
          <i className='material-icon basket-increment basket-delete'>-1</i>
        </span>
        <span className='secondary-content' onClick={() => {removeBasketList(id)}}>
          <i className='material-icons basket-delete'>delete_forever</i>
        </span>
      </li>
  );
}

export default CartItem;