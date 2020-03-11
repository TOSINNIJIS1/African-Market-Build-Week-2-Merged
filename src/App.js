import React, {useState} from 'react';
import './App.css';
import MarketPrice from "./Components/MarketPrice"
import Dashboard from "./Components/Dashboard"
import Listings from "./Components/Listings"
import Profile from "./Components/redux/Profile"
import LoginPage from "./Components/redux/loginPage"
import SignUpPage from "./Components/SignUpPage"
import data from "./data"
import { ProfileContext } from './Components/redux/ProfileContext';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from './Components/redux/privateRoute';
import Form from './Components/redux/Form'
import EditPage from './Components/EditPage'

function App() {
  const [profile] = useState(data);
  return (

<div className="App">
<ProfileContext.Provider  value={{profile}}>
<Router>
    <Switch>
        <PrivateRoute exact path='/' component={Dashboard} />
        <PrivateRoute path='/Listings' component={Listings} />    
        <PrivateRoute path='/AddProduct' component={Form} />
        <PrivateRoute path='/update' component={EditPage} />
        <PrivateRoute path='/profile' component={Profile} />
        <PrivateRoute path='/MarketPrice' component={MarketPrice} />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={SignUpPage} /> 
        
    </Switch>
</Router>
</ProfileContext.Provider>

</div>

  );
  
}

export default App;
