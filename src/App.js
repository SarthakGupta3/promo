import React from 'react';
import './App.css';

import Landing from './Components/Landing/landing'
import Nav from './Components/nav/nav';
import Features from './Components/Keyfeatures/features'
import Footer from './Components/Footer/footer';
import Product from './Components/Product/product'

function App() {
  return (
    <div className="App">
        <Nav />
        <Landing/>
        <Product/>
        {/* <Features/> */}
        {/* <Pro /> */}
        <Footer/>
       
    </div>
  );
}

export default App;
