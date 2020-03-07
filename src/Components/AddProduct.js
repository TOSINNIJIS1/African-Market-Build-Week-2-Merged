import React, { useState } from "react";
import axios from "axios";
import './AddProduct.css';
// import Popup from './Popup.js'

function AddProduct() {
  const [product, setProduct] = useState({ id: "", location: "", category: "", item: "", description: "", price: "" });

  const handleChange = event => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setProduct({ location: '', category: '', item: '', description: '', price: '' });

    axios
      .post("https://african-marketplace-bw-1.herokuapp.com/api/inputs", product)
      .then(response => {
        console.log(response);
        // console.log(response.data);
        setProduct(response.data);
      })
      .catch(err => console.log(err.response));
  };

  return (
    <div className="add-product">
      {console.log(product)}
      <div className="add-product-left">
        <h1>Sauti</h1>
        <h2>Add a product</h2>
      </div>
      <form onSubmit={event => handleSubmit(event)} className="add-product-right">
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={product.location}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Item:
          <input
            type="text"
            name="item"
            value={product.item}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={event => handleChange(event)}
          />
        </label>
        <button type="submit"> 
          Add Product
        </button>
        {/* <div className="button">
          <Popup />
        </div> */}
      </form>
    </div>
  );
}

export default AddProduct;
