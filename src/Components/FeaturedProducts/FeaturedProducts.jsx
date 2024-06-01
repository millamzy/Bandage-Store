import React, { useState } from 'react';
import { useGetProductsQuery } from '../../Redux/productsApi';
import featureCSS from './FeaturedProducts.module.css';
import Cards from '../../Components/Card/Cards';

const FeaturedProducts = () => {
  const { data, error, isLoading } = useGetProductsQuery();
  const [visibleCount, setVisibleCount] = useState(10);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  const displayedItems = data.products.slice(0, visibleCount).map((item) => (
    <Cards
      key={item.id}
      imageUrl={item.thumbnail}
      title={item.title}
      category={item.category}
      price={item.price}
      discountPercentage={item.discountPercentage}
    />
  ));

  return (
    <div className={featureCSS.container}>
      <div className={featureCSS.maincontent}>
        <h4>Featured Products</h4>
        <h3>BESTSELLER PRODUCTS</h3>
        <p>Problems trying to resolve the conflict between</p>
      </div>

      <div className={featureCSS.row}>
        {displayedItems}
      </div>

      {visibleCount < data.products.length && (
        <button onClick={handleLoadMore} className={featureCSS.loadMoreButton}>
          LOAD MORE PRODUCTS
        </button>
      )}
    </div>
  );
};

export default FeaturedProducts;
