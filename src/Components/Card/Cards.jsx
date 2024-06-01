// import React from 'react'
// import { Link } from 'react-router-dom';
// import CardCss from '../Card/Cards.module.css'

// const Cards = ({ id, title, category, price, discountPercentage, imageUrl }) => {
//   return (
//     <Link to={`/product/${id}`} className={CardCss.card}>
//     <div className={CardCss.movcard}>
//         <img src={props.imageUrl}/>     
//         <h5>{props.title}</h5>
//             <p>{props.category}</p>
//         <div className={CardCss.price}>
//            <h5> ${props.price}<span className={CardCss.price2}> ${props.discountPercentage}</span></h5>
//         </div>
//     </div>
//     </Link>
//   )
// }

// export default Cards



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
