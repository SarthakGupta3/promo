import React from 'react'
import './landing.css'

import logo from '../../Assets/logo.png';
import Watch from '../../Assets/watch.jpg';

class Landing extends React.Component{
    render(){
        return(
            <div className="landing-container">
                <div className="left-container">
                    <img src={logo} alt="" id="logo"></img>
                    <div className='text-container'>   
                        <p className="font-header">An AI enabled</p>
                        <p className="font-header">IOT based</p>
                        <p className="font-header">wristband.</p>
                    </div>
                    <button id="download">Download</button>
                </div>
                <div className="right-container">
                    <img src={Watch} alt="" id="cover"></img>
                </div>
            </div>
        )
    }
}   

export default Landing;