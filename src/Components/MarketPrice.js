import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import "./MarketPrice.css"
import axios from "axios";
import ItemCard from "./ItemCard"
import styled from 'styled-components'




function MarketPrice()  {

    const [marketItems, setMarketItems] = useState([]);
    useEffect(()=>{
        const getItems = () =>{
            axios.get('https://african-marketplace-bw-1.herokuapp.com/api/inputs',{
            })
            
            .then(response =>{
                console.log("Response Data", response);
                setMarketItems(response.data);
                
            })
            .catch(error=>console.log(error));
        }
        getItems();
    },[])
    console.log("Market Items ", marketItems)
     
    const [searchCat, setSearchCat] = useState('');
    const [searchItem, setSearchItem] = useState('');
    const [searchLoc, setSearchLoc] = useState('');
    const [searchResults, setSearchResults] = useState(marketItems);

 


    const itemChange = event =>{
        setSearchItem(event.target.value);
        console.log("Search Item ", searchItem);
    };
    const catChange = event =>{
        setSearchCat(event.target.value);
        
    };
    const locChange = event =>{
        setSearchLoc(event.target.value);
        
    };

    useEffect(()=>{
        const results = marketItems.filter(items =>{
           let itemData = items.item.toString().toLowerCase();
           let locData = items.location.toString().toLowerCase();
           let catData = items.category.toString().toLowerCase();
            
          return itemData.includes(searchItem.toLowerCase()) && locData.includes(searchLoc.toLowerCase()) && catData.includes(searchCat.toLowerCase()) ;
        });
        setSearchResults(results);
        
    }, [searchItem,searchLoc,searchCat, marketItems]);

    // const buttonHandler = (results) =>{
    //     console.log(results)
    //     results.map(item=>(
    //         <div>
    //         <ItemCard key = {item.id} idata = {item}/>
    //         </div>
    // ))

    // }

    const MarketPrice = styled.div `
    width:100%;
    height:100%;
    max-width:1080px;
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

    const SiteContainer = styled.div `
    height:100%;
    width:100%;
    margin: 5px;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: top;
    `;

    const SideBar = styled.div `
    width:50%;
    background-color: #142051;
    color: #FE7A7C;
    min-height:800px;
    
    
    `;

    const TextBox = styled.div `
    align-self: top;
    `;

    const FormContainer = styled.div `
    width:50%;
    margin:3%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:100%;
    
    `;

    const DropDownForm = styled.label `
    width:100%;
    max-width:600px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    `;

    const InputLabel = styled.label `
        max-width:600px;
        margin: 0px;
    `;


  

    return(

    
       <MarketPrice>

           <TopBar>
             <h2>Sauti.</h2>  
            <TopBarLink>
            <Link to = "/DashBoard">Home</Link>
            </TopBarLink>
             
             </TopBar>

        <SiteContainer>
            <SideBar>
                <TextBox>
                <h2>Sauti.</h2>
                <p>______________</p>
                <p>Market Price Check</p>
                <br/>
                <p>Here you can check local prices for goods,
                and use the information to make informed decisions
                on where to post your goods.</p>
                </TextBox>
                </SideBar>
             <FormContainer>
              <form >
                  <DropDownForm>
                      <p>Category:</p> 
                      <select value = {searchCat} onChange = {catChange}>
                          <option value = "" >-----</option>
                          <option value = "animal products" >Animal Products</option>
                          <option value = "beans" >Beans</option>
                          <option value = "cereals" >Cereals</option>
                          <option value = "fruits" >Fruits</option>
                          <option value = "vegetables" >Vegetables</option>
                          <option value = "seeds & nuts" >Seeds and Nuts</option>
                          <option value = "other" >Other</option>
                          <option value = "peas" >Peas</option>
                          <option value = "roots & tubers" >Roots and Tubers</option>
                          
                      </select>
                  </DropDownForm>
                  <br/>
                  <InputLabel>
                <p >Item: </p>
                <input
                id = "item"
                name = "item"
                type = "text"
                placeholder = "Search by item"
                value = {searchItem}
                onChange = {itemChange}
                />
                 </InputLabel>
                 <br/>
                 <InputLabel >
                     <p>Location:</p> 
                     <input
                     id = "location"
                     name = "location"
                     type = "text"
                     placeholder = "Search by location"
                     
                     value = {searchLoc}
                     onChange = {locChange}
                     />
                 </InputLabel>
              </form>

              <br/>

              <div className = "itemCardHolder">
                {searchResults.map(item=>(
                        <ItemCard key = {item.id} idata = {item}/>
                ))}
                </div>
                
              
              </FormContainer>
              
              </SiteContainer>

              
           

        </MarketPrice>


    )
}

export default MarketPrice;