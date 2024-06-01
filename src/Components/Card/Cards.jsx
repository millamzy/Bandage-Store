


import React from 'react';
import { Link } from 'react-router-dom';
import CardCss from './Cards.module.css';

const Cards = ({ id, title, category, price, discountPercentage, imageUrl }) => {

 

  return (
    <Link to={`/product/${id}`} className={CardCss.card}>
      <div className={CardCss.movcard}>
        <img src={imageUrl} alt={title} className={CardCss.image} />
        <h5>{title}</h5>
        <p>{category}</p>
        <div className={CardCss.price}>
          <h5>
            ${price}
            <span className={CardCss.price2}>${discountPercentage}</span>
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
