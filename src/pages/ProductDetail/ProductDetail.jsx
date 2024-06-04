import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
import Topnav2 from '../../Components/Topnav2/Topnav2.jsx';
import Navbar3 from '../../Components/Navbar2/Navbar3.jsx';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();
  const { data, error, isLoading } = useGetProductByIdQuery(productId);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      localStorage.setItem('productDetails', JSON.stringify(data));
    }
  }, [data]);

  const savedData = localStorage.getItem('productDetails');
  const productData = data || (savedData && JSON.parse(savedData));

  if (isLoading && !productData) {
    return <div>Loading...</div>;
  }

  if (error && !productData) {
    return <div>Error fetching product details</div>;
  }

  if (!productData) {
    return <div>No product data available</div>;
  }

  const { id, title, category, price, thumbnail, description } = productData;

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, imageUrl: thumbnail, price }));
  };

  return (
    <>
      <div className={styles.nav1}>
        <Topnav2 />
      </div>
      <Navbar3 />
      <div className={styles.container}>
        <div className={styles.top}>
          <Link to="/">
            <div className={styles.top_home}>Home</div>
          </Link>
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
    </>
  );
};

export default ProductDetails;
