import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Product from './components/Product';
import  Footer  from './components/Footer';
import  InfoSemillas  from './components/InfoSemillas';
import  InfoBook  from './components/InfoBook';
import InfoLandingPage from './components/infoLandingPage';
import Cart from './components/Cart';
import './App.css';
import { Provider } from 'react-redux';
import store from './store.js'

function App() {
  return (
    <Provider store={store}>

      <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home}/>
        <Route  path="/about" component={About}/>
        <Route  path="/infosemillas" component={InfoSemillas}/>
        <Route  path="/InfoBook" component={InfoBook}/>
        <Route  path="/infoLandingPage" component={InfoLandingPage}/>
        <Route  path="/product" component={Product}/>
        <Route path="/cart" component={Cart}/>
      </Switch>
     <Footer/>
      </BrowserRouter>
      </div>

    </Provider>
  );
}

export default App;
