import React from 'react';
import '../styles/portfolio.scss';

import socialMapsImg from '../assets/socialmaps.png';
import imageBoxImg from '../assets/imagebox.png';
import hiliteImg from '../assets/hi-lite.png';
import csclubImg from '../assets/csclub.png';
import ytImg from '../assets/youtube-socket.png';
import pictoImg from '../assets/picto-find.png';


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
                    title="Social CrowdMapping"
                    description="
                    Created a community-driven map with location-dependent data using Google Maps API and Firebase. 
                    Optimized update and delete operations by implementing a HashMap to store map marker objects"
                    />
                </div>
                <div className="column">
                    <Project
                    imageUrl={csclubImg}
                    title="Computer Science Department Club Web App"
                    description="Integrated an event calendar system with Google Calendar API to increase social interaction among club members and highlight upcoming events"
                    />
                </div>
                <div className="column">
                    <Project
                    imageUrl={imageBoxImg}
                    title="Browser-Based Photo Editor"
                    description="Developed a ReactJS web-based developer tool that allows end-users to edit pictures with CSS"
                    />
                </div>
                <div className="column">
                    <Project
                    imageUrl={hiliteImg}
                    title="Hi-Lite"
                    description="Built an application that generates a quick summary of posted blogs and news articles using the MEAN stack"
                    />
                </div>
                <div className="column">
                    <Project
                    imageUrl={ytImg}
                    title="Synchronized YouTube Videos"
                    description="Employed a real-time engine with Socket.io, which allowed users to sync embedded YouTube videos together at the same time point and load the same video across multiple clients"
                    />
                </div>
                <div className="column">
                    <Project
                    imageUrl={pictoImg}
                    title="Google Image Clone"
                    description="Created a Google Images clone with ReactJS and utilized modern CSS Flexbox"
                    />
                </div>
                
            </div>
        </div>
    );
}


export default Portfolio;