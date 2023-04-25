function ProductItem(props){

    const {name,brand,price,discountedPrice,discountedPercentage,ratings,likes} = props;

    return <div className="ProductItem">
        <div className='Product-image'></div>
        <div className='Product-info'>
            <p>{brand}</p>
            <p>{name}</p>
            <div>
               <p>{price}</p>
               <p>{discountedPrice}</p>
               <p>{discountedPercentage}</p>
            </div>
            <div className="Feedback">
                <span>{ratings}</span>
                <span>{likes}</span>
            </div>
        </div>    
    </div>
}    

export default ProductItem;