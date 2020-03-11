import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../Components/redux/withAuth/AxiosWithAuth'
import {connect} from 'react-redux';
import {EditProductCRUD} from '../Actions/action'

const EditProduct = () => {
    
    const [allProduct, setAllProduct] = useState([])
    const [productToEdit, setProductToEdit] = useState({})


    useEffect(() => {
        axiosWithAuth().get(`/inputs`)
        .then(res => {
            console.log(res.data)
            setAllProduct(res.data)
        })
        .catch(err => console.log(err))
        
    },[])

    const editProduct = product => {
        // product.preventDefault()
        setProductToEdit(product)

    } 


    const putProduct = e => {
        e.preventDefault()
        axiosWithAuth().put(`/inputs/${productToEdit.id}`, productToEdit)
        .then(() => {
            axiosWithAuth().get(`/inputs`)
            .then(res => setAllProduct(res.data))
            
        })
        .catch(err => console.log('Error, Product Not Edited', err))

    } 


    return (
        <div>
            {console.log(productToEdit)}
                <form onSubmit={putProduct}>
                <input 
                type='text'
                placeholder="item"
                name='item'
                value={productToEdit.item}
                onChange={e => setProductToEdit({...productToEdit, item: e.target.value})}

                />

                <input 
                type='text'
                placeholder='location'
                name='location'
                value={productToEdit.location}
                onChange={e => setProductToEdit({...productToEdit, location: e.target.value})}


                />

                <input 
                type='text'
                placeholder='description'
                name='description'
                value={productToEdit.description}
                onChange={e => setProductToEdit({...productToEdit, description: e.target.value})}


                
                />

                <input 
                type='text'
                placeholder='category'
                name='category'
                value={productToEdit.category}
                onChange={e => setProductToEdit({...productToEdit, category: e.target.value})}


                />

                <input 
                type='text'
                placeholder='price'
                name='price'
                value={productToEdit.price}
                onChange={e => setProductToEdit({...productToEdit, price: e.target.value})}

                />
                <button> Submit </button>


            </form>

            {allProduct.map(product => {
                return (
                    <div key={product.id}>
                    {product.id}
                    {product.item}
                    {product.description}
                    {product.category}
                    {product.price}
                    {product.location}
                    <button onClick={() => editProduct(product)}>edit</button>
                    </div>
                )
            })}

        </div>

    )
}

const map = state => ({
    product: state.product,
    error: state.error
})


export default connect(
    map, {EditProductCRUD}
)(EditProduct)