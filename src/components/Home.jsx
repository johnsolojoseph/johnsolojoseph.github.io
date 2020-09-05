import React from 'react';
import '../styles/home.scss';

import Header from './Header';

function Home(){
    return(
        <div className="home">
            <Header 
            name="John Solo"
            title="Software Engineer"
            />
        </div>
    );
}


export default Home;