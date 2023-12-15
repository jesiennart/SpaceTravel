import React from 'react';
import Nav from './Nav'
import Main from './Main';
import Circle from './Circle';
import '../Homepage/home.css';

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