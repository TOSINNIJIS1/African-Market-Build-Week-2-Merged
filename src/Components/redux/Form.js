import React from 'react';
import {AddProductCRUD} from '../../actions/action'
import {connect} from 'react-redux'


class Form extends React.Component {

    state = {
        location: '',
        category: '',
        item: '',
        description: '',
        price: ''
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        let data = this.state;
        e.preventDefault()
        this.props.AddProductCRUD(data)
        this.setState({
            id: '',
            location: '',
            category: '',
            item: '',
            description: '',
            price: ''
            
        });
    };
    


    render() {

        return (
            <form onSubmit={this.onSubmit}>
                <input 
                type="text"
                name="location"
                value={this.state.location}
                onChange={this.onChange}
                placeholder='location'
                
                />

                <input 
                type="text"
                name="item"
                value={this.state.item}
                onChange={this.onChange}
                placeholder='item'
                
                />

                <input 
                type="text"
                name="description"
                placeholder="description"
                value={this.state.description}
                onChange={this.onChange}
                
                />

                <input 
                type="text"
                name="price"
                placeholder="Price"
                value={this.state.price}
                onChange={this.onChange}
                
                />

                <input 
                type="text"
                name="category"
                placeholder="Category"
                value={this.state.category}
                onChange={this.onChange}
                
                />


                <button onClick={this.onSubmit}> Add </button>

            </form>
        )
    }
}


const map = state => ({
    products: state.products
});

export default connect(
    map, {AddProductCRUD}
)(Form)