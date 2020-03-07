import React from 'react';
import {connect} from 'react-redux'
import {ProductCRUD, EditProductCRUD, DeleteProductCRUD} from '../../actions/action'
import Product from './Products'



const ProductList = ({productToAdd}) => {


        return (

            <div>
                {productToAdd.map(product => (
                    <Product
                    id={product.id}
                    item={product.item}
                    description={product.description}
                    category={product.category}
                    price ={product.price}
                    location ={product.location}
                    />
                    
                ))}
                
                
            </div>
        )
    
}


const map = state => ({
    products: state.products,
    error: state.error
});

export default connect (
    map, {ProductCRUD, EditProductCRUD, DeleteProductCRUD}
)(ProductList)