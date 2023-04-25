import React from "react";
import ProductItem from './productItem';

const productItemData = {
  name: "T Shit",
  brand: "Roadstar",
  price: 340,
  discountedPrice: 300,
  discountedPercentage: "40%"
};


function App() {
  return (
    <div className="App">
      <ProductItem data={productItemData} />
    </div>
  );
}



export default App;

