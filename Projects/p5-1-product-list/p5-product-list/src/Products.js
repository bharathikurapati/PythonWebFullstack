import ProductItem from "./Product-Item";

function products(props) {
    const {productsData} = props;

    return (
      <div className="productList">
        {productsData.map((item) => {
          return <productsItem data={item} />;
        })}    
       </div>
    );
}

export default products;
    
    