import React from 'react';
import BreadCrumb from './BreadCrumb';
import ProductFilter from './ProductFilteList';

function ProductHome(){
    return (
        <div className='ProductHome'>
            <BreadCrumb></BreadCrumb>
            <ProductFilter></ProductFilter>
        </div>
    );    
}


export default ProductHome;