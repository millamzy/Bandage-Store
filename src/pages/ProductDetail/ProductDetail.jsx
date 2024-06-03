import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../Redux/productsApi.jsx';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/cartSlice';
import styles from './ProductDetails.module.css';
import Vector4 from '../../../public/images/Vector4.png';
import productcolo from '../../../public/images/product-colors.png';
import like from '../../../public/images/like.png';
import basket from '../../../public/images/basket.png';
import more from '../../../public/images/more.png';
import ReviewPage from '../../Components/ReviewPage/ReviewPage';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import LogoPage from '../../Components/LogoPage/LogoPage';

const ProductDetails = () => {
  const { productId } = useParams();
  const { data, error, isLoading } = useGetProductByIdQuery(productId);
  const dispatch = useDispatch();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching product details</div>;
  }

  const { id, title, category, price, thumbnail, description } = data;

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, imageUrl: thumbnail, price }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.top_home}>Home</div>
        <img src={Vector4} alt="Vector" />
        <div className={styles.top_shop}>Shop</div>
      </div>
      <div className={styles.main}>
        <div className={styles.section}>
          <img src={thumbnail} alt={title} />
          <div className={styles.text_section}>
            <h4>{title}</h4>
            <div className={styles.star_rating}>
              <span className={styles.star} data-value="1">&#9733;</span>
              <span className={styles.star} data-value="2">&#9733;</span>
              <span className={styles.star} data-value="3">&#9733;</span>
              <span className={styles.star} data-value="4">&#9733;</span>
              <span className={styles.star} data-value="5">&#9733;</span>
              <h6>10 Reviews</h6>
            </div>
            <p className={styles.price1}>${price}</p>
            <p>Availability: <span>In Stock</span></p>
            <hr />
            <img src={productcolo} alt="Product Colors" />
            <div className={styles.bottom}>
              <button onClick={handleAddToCart}>Add to Cart</button>
              <img src={like} alt="Like" />
              <Link to="/cart">
                <img src={basket} alt="Basket" />
              </Link>
              <img src={more} alt="More" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <ReviewPage />
      </div>
      <div className={styles.product}>
        <h3>BESTSELLER PRODUCTS</h3>
        <FeaturedProducts />
      </div>
      <LogoPage />
    </div>
  );
};

export default ProductDetails;
