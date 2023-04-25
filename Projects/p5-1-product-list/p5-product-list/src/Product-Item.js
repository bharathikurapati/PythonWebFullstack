import React from "react";

function ProductItem(props) {
  const {
    name,
    price,
    discountedPrice,
    discountedPercentages,
    brand,
    ratings,
    likes
  } = props.data;

  return (
    <div ClassName="ProductItemBox">
      <div ClassName="ProductPhoto"></div>
      <div ClassName="ProductDetails">
        <p>{brand}</p>
        <p>{name}</p>
        <div ClassName="Feedback">
          <span>{ratings}</span>
          <span>{likes}</span>
      </div>
      <div ClassName="PriceDetails">
        <span>{discountedPrice}</span>
        <span ClassName="ActualPrice">{price}</span>
        <span>{discountedPercentages}</span>
      </div>
    </div>
  </div>    
 );
} 

export default ProductItem;
  
