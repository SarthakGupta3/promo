import React from 'react';

import footer from '../../Assets/footer.jpg'
import './footer.css'

class Footer extends React.Component{
    render(){
        return( 
        <div id="footer">
            <div style={{paddingTop:'10rem'}} className="footer-container">
                <p className="footer-text">Contact Information</p>
                <p className="footer-text">and</p>
                <p className="footer-text">Other Details</p>
            </div>
          
        </div>
        )
       
    }
}

export default Footer;          