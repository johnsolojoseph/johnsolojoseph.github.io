import React from 'react';
import '../styles/about-me.scss';

import NavBar from './NavBar';
import WordBlock from './WordBlock';

function About(){
    return(
        <div className="about-me container">
            <NavBar />
            <WordBlock
            text="About Me"
            />

            <WordBlock
            text="Connect"
            />

            <div className="social-media">
                <a target="_blank" href="https://www.linkedin.com/in/johnsolojoseph/" rel="noopener noreferrer"><i className="fab fa-linkedin fa-5x" /></a>
                <a target="_blank" href="https://github.com/johnsolojoseph" rel="noopener noreferrer"><i className="fab fa-github-square fa-5x"/></a>
            </div>
        </div>
    );
}


export default About;