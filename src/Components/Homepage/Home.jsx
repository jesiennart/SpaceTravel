import React from 'react';
import Nav from './Nav'
import Main from './Main';
import Circle from './Circle';
import './Home.css';

function Home() {
    return (
       <div>
        <Nav />
        <Main />
        <Circle />
       </div>
    )
}

export default Home;