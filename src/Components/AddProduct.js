import React, { useState } from 'react'
import {connect} from 'react-redux'
import {AddProductCRUD} from '../Actions/action'

const AddProducts = (props) => {

    const [add, setAdd] = useState({
        location: '',
        category: '',
        item: '',
        description: '',
        price: ''
    })

    const onHandle = e => {
        setAdd({
            [e.target.name]: e.target.value
        })
    }


    const onSubmit = e => {
        e.preventDefault();
        props.AddProductCRUD(add)
        setAdd({...add})
    }


  return (
    <div className="add-product">
      <div className="add-product-left">
        <h1>Sauti</h1>
        <h2>Add a product</h2>
      </div>
      <form onSubmit={onSubmit}>
                <input 
                type="text"
                name="location"
                value={add.location}
                onChange={onHandle}
                placeholder='location'
                
                />

                <input 
                type="text"
                name="item"
                value={add.item}
                onChange={onHandle}
                placeholder='item'
                
                />

                <input 
                type="text"
                name="description"
                placeholder="description"
                value={add.description}
                onChange={onHandle}
                
                />

                <input 
                type="text"
                name="price"
                placeholder="Price"
                value={add.price}
                onChange={onHandle}
                
                />

                <input 
                type="text"
                name="category"
                placeholder="Category"
                value={add.category}
                onChange={onHandle}
                
                />

        <button onClick={onSubmit}> Add Product </button>

        {/* <div className="button">
          <Popup />
        </div> */}
      </form>
    </div>
  );
}

const map = state => ({
  products: state.products,
  error: state.error,
  isFetching: state.isFetching
})


export default connect(
  map, {AddProductCRUD}
)(AddProducts)
