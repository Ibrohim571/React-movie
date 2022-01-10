import {useContext} from 'react';
import { ShopContext } from '../context';

function GoodsItem(props) {
  const {addToBasket} = useContext(ShopContext)

  const {id, name, description, price, full_background} = props
  return (
    <div id={id} className='card'>
      <div className='card-image'>
        <div className="card-image">
          <img src={full_background} alt={name} />
        </div>
        <div className='card-content'>
          <span className='card-title'>{name}</span>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <button className='btn' onClick={() => {addToBasket({id, name, price})}}>Buy</button>
          <span className='right'>{price}$</span>
        </div>
      </div>
    </div>
  );
}

export default GoodsItem;