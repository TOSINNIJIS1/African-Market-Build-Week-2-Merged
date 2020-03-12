import React from 'react';
import {connect} from 'react-redux'
import {ProductCRUD, DeleteProductCRUD, EditProductCRUD} from '../Actions/action'
import {Link} from 'react-router-dom';
import styled from "styled-components";
import ItemCard from "./ItemCard";

function Listings(props) {

  const GetonSubmit = e => {
    e.preventDefault();
    props.ProductCRUD();
  }

  const onDelete = id => {
    console.log('id', id)
    props.DeleteProductCRUD(id)
  }


  const ListContainer = styled.section `
    display:flex;
    flex-direction:column;
      
  `;

  const TopBar = styled.div `
  width:100%;
  display:flex;
  flex-direction:row;
  background-color: #142051;
  color: #FE7A7C;
  justify-content:space-around;
    
  `;

  const TopBarLink = styled.a `
  text-decoration:none;
  color:#FE7A7C;
  height:5%;
  align-self:center;
  
  `;


 



  return (

    
  <ListContainer>
        <TopBar>
            <h2>Sauti.</h2>  
          <TopBarLink>
          <Link to = "/DashBoard">Home</Link>
          </TopBarLink>
            
        </TopBar>

        <div>
            {console.log(props.products)}
            {props.isFetching ? (
                <div> Products Loading... </div>
            ): (<button onClick={GetonSubmit}> Products </button>)}
            
            <div>
            {props.products.map((product) => {
              return(

                <div>
                  
        
        <ItemCard key = {product.id} idata = {product} />
        <button onClick={() => {onDelete(product.id)}}>Delete</button>

        </div>
              )  
        
            })}  
              
            </div>
            </div>
            </ListContainer>
            
  );
}

const map = state => ({
  products: state.products,
  error: state.error,
  isFetching: state.isFetching
})


export default connect(
  map, {ProductCRUD, DeleteProductCRUD, EditProductCRUD}
)(Listings)
