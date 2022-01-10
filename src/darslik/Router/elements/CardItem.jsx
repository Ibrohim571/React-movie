import React from 'react';
import { Link } from 'react-router-dom';

export default function CardItem({idCategory, strCategory, strCategoryThumb, strCategoryDescription}) {

  return (
    <div className='card'>
      <span className='span'>
      </span>
      <div className="card-image">
        <img src={strCategoryThumb} />
      </div>
      <div className="card-content">
        <span className="card-title"><b>{strCategory}</b></span>
        <p>{strCategoryDescription.slice(0, 60)}...</p>
      </div>
      <div className="card-action">
        <Link to={`/category/${strCategory}`} className='btn'>Watch Category</Link>
      </div>
    </div>
  );
}