import React, {useEffect, useState}  from 'react'
import ProductList from './productsList'
import {connect} from 'react-redux'
import {ProductCRUD} from '../../actions/action'
import axios from 'axios'

const AddProduct = props => {

    const [productToAdd, setProductToAdd] = useState([])


    useEffect(() => {
        axios.get(`https://african-marketplace-bw-1.herokuapp.com/api/inputs`)
        .then(res => {
            console.log('Product INFO', res)
            setProductToAdd(res.data)
        })
        .catch(err => {
            console.log('Product ERROR', err)
        })
    }, [])

        return(
            <div>
                <ProductList {...props} productToAdd={productToAdd} />

    

                <button onClick={props.ProductCRUD}>Content</button>
            </div>
        )
    
}

const map = state => ({
    products : state.products,
    error : state.error
})


export default connect (
    map, {ProductCRUD}
)(AddProduct)