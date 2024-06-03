import React, { useState } from 'react';
import { useGetProductsQuery } from '../../Redux/productsApi';
import featureCSS from '../FeaturedProducts/FeaturedProducts.module.css';
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
      id={item.id} // Add the product ID prop
      title={item.title}
      category={item.category}
      price={item.price}
      discountPercentage={item.discountPercentage}
      imageUrl={item.thumbnail}
    />
  ));

  return (
    <div className={featureCSS.container}>

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
