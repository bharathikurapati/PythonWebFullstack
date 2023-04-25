import "../App.css";
import ProductItem from "./ProductItem";
const productData = [
  {
    name:"Regular T Shirt", 
    brand:"Roadstar", 
    price:450, 
    discountedPrice:300, 
    discountedPercentage:"45%",
    ratings:"4.5",
    likes:"34.9"
  },
  {
    name:"Regular T Shirt", 
    brand:"Friskers", 
    price:400, 
    discountedPrice:200, 
    discountedPercentage:"45%",
    ratings:"4.5",
    likes:"34.9"
  },
  {
    name:"Regular T Shirt", 
    brand:"Jack & Jones", 
    price:500, 
    discountedPrice:450, 
    discountedPercentage:"45%",
    ratings:"4.5",
    likes:"34.9"
  },
  {
    name:"Regular T Shirt", 
    brand:"H&M", 
    price:500, 
    discountedPrice:400, 
    discountedPercentage:"45%",
    ratings:"4.5",
    likes:"34.9"
  },
  {
    name:"Regular T Shirt", 
    brand:"Puma", 
    price:350, 
    discountedPrice:250, 
    discountedPercentage:"45%",
    ratings:"4.5",
    likes:"34.9"
  },
  {
    name:"Regular T Shirt", 
    brand:"TOMMY HILFIGER", 
    price:350, 
    discountedPrice:200, 
    discountedPercentage:"45%",
    ratings:"4.5",
    likes:"34.9"
  },
  {
    name:"Regular T Shirt", 
    brand:"POWERLOOK", 
    price:350, 
    discountedPrice:150, 
    discountedPercentage:"45%",
    ratings:"4.5",
    likes:"34.9"
  }

];
function ProductList(props){

  return <div className="ProductList">
    {
      productData.map(item => {
        return <ProductItem {...item}></ProductItem>
      })
    }
  </div> 
}

export default ProductList;
