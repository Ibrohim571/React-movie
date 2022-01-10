import React from 'react';
import CardItem from './CardItem';

export default function CardList({categories = []}) {
  return (
    <div className='List'>
      {categories.map(item =>  (<CardItem key={item.idCategory} {...item} />))}
    </div>
  );
}