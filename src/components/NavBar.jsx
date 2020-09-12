import React, { useState } from 'react';
import '../styles/navbar.scss';

import {NavLink} from 'react-router-dom';

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
                        <NavLink to="/" >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio">Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                </ul>
                
            </nav>

            <i className="fas fa-bars burger" onClick={() => setNavWidth(100)} onKeyDown={() => handleKeyDown(100)} role="button" tabIndex="0"/>

            <div className="side-nav" style={{width:`${ navWidth }%`}}>
                <div className="mobile-container ">
                    <i className="fas fa-times" onClick={() => setNavWidth(0)} onKeyDown={() => handleKeyDown(0)} role="button" tabIndex="-1"/>
                    <ul className="nav-mobile-ul">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/portfolio">Portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>

        
    );
}


export default NavBar;