import React from 'react';
import '../styles/about-me.scss';

import NavBar from './NavBar';
import WordBlock from './WordBlock';
import AboutText from './AboutText';

function About(){
    return(
        <div className="about-me container">
            <NavBar />
            <WordBlock
            text="About Me"
            />
            <AboutText> 
                Hi, I&apos;m John Solo!
                <span role="img" aria-label="Hand Wave">👋</span> 
                I’m a Software Engineer from California, and my main technical focuses are full-stack web development and cloud infrastructure.
            </AboutText>

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