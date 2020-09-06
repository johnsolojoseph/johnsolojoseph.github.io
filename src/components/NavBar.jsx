import React from 'react';
import '../styles/navbar.scss';

import {Link} from 'react-router-dom';

function NavBar(){
    return(
        <div className="navbar">
            <nav>
                <ul className="nav-desktop-ul">
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
                <i className="fas fa-bars" />
            </nav>
        </div>
    );
}


export default NavBar;