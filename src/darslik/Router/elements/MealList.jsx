import React from 'react';
import MealItem from './MealItem';

function MealList({meals}) {
  return (
    <div className='List'>
      {meals.map((item) => (<MealItem key={item.idMeal} {...item} />))}
    </div>
  );
}

export default MealList;