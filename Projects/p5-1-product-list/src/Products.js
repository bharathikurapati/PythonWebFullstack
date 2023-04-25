import ProductItem from "./Product-Item";

function Products(props) {
    const {productsData} = props;

    return (
      <div className="productList">
        {productsData.map((item) => {
          return <ProductItem data={item} />;
        })}    
       </div>
    );
}

export default Products;
    
    