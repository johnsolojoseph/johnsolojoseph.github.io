import React, { useState } from 'react';
import '../styles/navbar.scss';

import {Link} from 'react-router-dom';

function NavBar(){
    const [navWidth, setNavWidth] = useState(0);

    function handleKeyDown(width) {
        setNavWidth(width)
    }

    

    return(
        <div className="navbar">
            <nav className="desktop=nav">
                <ul className="nav-desktop-ul">
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
                
            </nav>

            <i className="fas fa-bars" onClick={() => setNavWidth(100)} onKeyDown={() => handleKeyDown(100)} role="button" tabIndex="0"/>

            <div className="side-nav" style={{width:`${ navWidth }%`}}>
                <ul className="nav-mobile-ul">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </div>

        
    );
}


export default NavBar;