import React from 'react';
import '../styles/portfolio.scss';

import socialMapsImg from '../assets/socialmaps.png';


import NavBar from './NavBar';
import WordBlock from './WordBlock';
import Project from './Project';

function Portfolio(){
    return(
        <div className="portfolio container">
            <NavBar />
            <WordBlock
            text="Portfolio"
            />

            <div className="projects">
                <div className="column">
                    <Project
                    imageUrl={socialMapsImg}
                    />
                </div>
                <div className="column">
                    <Project
                    imageUrl={socialMapsImg}
                    />
                </div>
                <div className="column">
                    <Project
                    imageUrl={socialMapsImg}
                    />
                </div>
                <div className="column">
                    <Project
                    imageUrl={socialMapsImg}
                    />
                </div>
                <div className="column">
                    <Project
                    imageUrl={socialMapsImg}
                    />
                </div>
                <div className="column">
                    <Project
                    imageUrl={socialMapsImg}
                    />
                </div>
                
            </div>
        </div>
    );
}


export default Portfolio;