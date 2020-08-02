import React from 'react';
import './App.css';

import Landing from './Components/Landing/landing'
import Nav from './Components/nav/nav';
import Features from './Components/Keyfeatures/features'
import Footer from './Components/Footer/footer'

function App() {
  return (
    <div className="App">
        <Nav />
        <Landing/>
        <Features/>
        <Footer/>
    </div>
  );
}

export default App;
