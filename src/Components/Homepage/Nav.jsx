import React from 'react';

function Nav() {
    return (
        <div className='nav'>
            <div className='logo'></div>
            <div className='line'></div>
            <div className='menu'>
                <a href='#'><span>00</span> Home</a>
                <a href='#'><span>01</span> Destination</a>
                <a href='#'><span>02</span> Crew</a>
                <a href='#'><span>03</span> Technology</a>
            </div>
        </div>
    )
}

export default Nav;