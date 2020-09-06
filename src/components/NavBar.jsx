import React from 'react';
import '../styles/navbar.scss';

import {Link} from 'react-router-dom';

function NavBar(){
    return(
        <div className="navbar">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}


export default NavBar;