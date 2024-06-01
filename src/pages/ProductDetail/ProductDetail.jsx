import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../Redux/productsApi';
import styles from './ProductDetails.module.css';

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

  return (
    <div className={styles.container}>
      <div className={styles.top}>Home <span>shop</span></div>
      <div className={styles.section}>
        <img src={thumbnail} alt={title}  />
        <h1>{title}</h1>
        <p>{category}</p>
        <p>${price}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
