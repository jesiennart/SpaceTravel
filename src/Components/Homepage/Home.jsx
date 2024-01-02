import React from 'react';
import Nav from '../Navbar/Nav'
import Main from './Main';
import Circle from './Circle';
import '../Homepage/Home.css';

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