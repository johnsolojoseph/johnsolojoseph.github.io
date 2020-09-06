import React from 'react';
import '../styles/portfolio.scss';

import NavBar from './NavBar';
import WordBlock from './WordBlock';

function Portfolio(){
    return(
        <div className="portfolio container">
            <NavBar />
            <WordBlock
            text="Portfolio"
            />
        </div>
    );
}


export default Portfolio;