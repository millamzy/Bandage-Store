import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../Redux/productsApi';
import styles from './ProductDetails.module.css';
import Vector4 from '../../../public/images/Vector4.png'
import productcolo from '../../../public/images/product-colors.png'
import like from '../../../public/images/like.png'
import basket from '../../../public/images/basket.png'
import more from '../../../public/images/more.png'

const ProductDetails = () => {
  const { productId } = useParams();
  const { data, error, isLoading } = useGetProductByIdQuery(productId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching product details</div>;
  }

  const { title, category, price, thumbnail, description } = data;




  document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    
    stars.forEach(star => {
        star.addEventListener('click', () => {
            clearSelection();
            star.classList.add('selected');
            fillStarsUpTo(star);
        });
    });

    function clearSelection() {
        stars.forEach(star => {
            star.classList.remove('selected');
        });
    }

    function fillStarsUpTo(element) {
        const index = [...stars].indexOf(element);
        for (let i = 0; i <= index; i++) {
            stars[i].classList.add('selected');
        }
    }
});

  




  return (
    <div className={styles.container}>
       <div className={styles.top}>
          <div  className={styles.top_home} >Home</div>
          <img src={Vector4}/> 
          <div className={styles.top_shop} >shop</div> 
        </div>
      <div className={styles.main}>
          <div className={styles.section}>
            <img src={thumbnail} alt={title}  />
            <div className={styles.Text_section}>
              <h4>{title}</h4>
              <div className={styles[`star-rating`]}>
                <span className={styles.star} data-value="1">&#9733;</span>
                <span className={styles.star} data-value="2">&#9733;</span>
                <span className={styles.star} data-value="3">&#9733;</span>
                <span className={styles.star} data-value="4">&#9733;</span>
                <span className={styles.star} data-value="5">&#9733;</span>
                <h6>10 Reviews</h6>
            </div>
              <p className={styles.price1} >${price}</p>
              <p>Availability  : <span>In Stock</span></p> 
              <hr></hr>
              <img src={productcolo}/>
              <div className={styles.bottom}>
                <button>Select Options</button>
                <img src={like}/>
                <img src={basket}/>
                <img src={more}/>
              </div>
            </div>
          </div>
      </div>
    </div>

    
  );
};

export default ProductDetails;
