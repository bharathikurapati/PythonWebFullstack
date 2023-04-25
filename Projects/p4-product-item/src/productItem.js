import React from "react";

function ProductItem(props) {
  // const [productItem, setProduct] = React.useState("Raju");
  const { name, brand, discountedPrice,discountedPercentage} = props.data;
  return (
    <div>
      <p>{name}</p>
      <p>{brand}</p>
      <p>{discountedPrice}</p>
      <p>{discountedPercentage}</p>
    </div>
  );
}

export default ProductItem;

