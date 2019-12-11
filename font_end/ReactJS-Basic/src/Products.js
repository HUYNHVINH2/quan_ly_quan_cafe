import React from 'react';

import Product from './Product'
export default class Products extends React.Component{
    constructor(props){
        super(props);
        this.ssss = { 
            ProductArr : [
                { name: 'Product1', price: 1200 },
                { name: 'Product2', price: 1300 },
                { name: 'Product3', price: 1400 }
            ]
        }
    }
    render(){
        let { ProductArr } = this.ssss;
        return (
            <div>
                {
                    ProductArr.map(product => 
                        <Product key={ `product-detail-${product.name}` } name = {product.name }  price = { product.price }></Product>
                    )
                }
            </div>
        )
    }
}