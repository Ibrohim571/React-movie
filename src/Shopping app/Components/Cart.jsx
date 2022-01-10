import {useContext} from 'react';
import { ShopContext } from '../context';

function Cart(props) {


  const {quantity = 0} = props
  const {toggleVisileCart = Function.prototype} = useContext(ShopContext)
  return (
    <div className='cart' onClick={toggleVisileCart}>
      <i className='material-icons'>add_shopping_cart</i>
      {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
    </div>
  );
}

export default Cart;