import React from 'react';
import '../styles/home.scss';

import Header from './Header';

import Canvas from './Canvas';

function Home(){
    return(
        <div className="home">
            <Header 
            name="John Solo"
            title="Software Engineer"
            />

            <Canvas />
        </div>
    );
}


export default Home;