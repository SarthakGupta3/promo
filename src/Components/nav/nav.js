import React from 'react';

import './nav.css';

class Nav extends React.Component{
    render(){
        return (
            <ul className="navbar">   
                <li className="nav-item" id="nav-item-head">Contact</li>
                <li className="nav-item">Download</li>
            </ul>
        )
    }
}

export default Nav;