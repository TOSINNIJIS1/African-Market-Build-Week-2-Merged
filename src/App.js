import React, {useState} from 'react';
import './App.css';
import {Route} from "react-router-dom"
import privateRoute from "./Components/redux/privateRoute"
import MarketPrice from "./Components/MarketPrice"
import Dashboard from "./Components/Dashboard"
import AddProduct from "./Components/AddProduct"
import Listings from "./Components/Listings"
import Profile from "./Components/redux/Profile"
import loginPage from "./Components/redux/loginPage"
import SignUpPage from "./Components/redux/SignUpPage"
import data from "./data"
import { ProfileContext } from './Components/redux/ProfileContext';

function App() {
  const [profile] = useState(data);
  return (
    <ProfileContext.Provider value ={{profile}}>

    <div className="App">
      
      <Route
    path = "/"
    exact component = {SignUpPage} />
    <Route
    path = "/login"
    component = {loginPage}/>

    <Route
    path = "/DashBoard"
    component = {Dashboard}/>
    <Route
    path = "/MarketPrice"
    component = {MarketPrice} /> 
    <Route
    path = "/AddProduct"
    component = {AddProduct} />
    <Route
    path = "/Listings"
    component = {Listings} />
    <Route
    path = "/Profile"
    component = {Profile} />
        
    </div>
    </ProfileContext.Provider>
 
  );
}

export default App;
