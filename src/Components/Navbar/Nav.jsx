import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';

function Nav() {

        function ShowMobileNav() {
            const menu = document.querySelector('.menu')
            const burger = document.querySelector('.btn-burger')
            menu.classList.add('show')
            menu.classList.contains('show') ? burger.style.display = 'none' : burger.style.display = 'block'
        }
        function HideMobileNav() {
            const menu = document.querySelector('.menu')
            const burger = document.querySelector('.btn-burger')
            menu.classList.remove('show')
            burger.style.display = 'block'
        }


    return (
        <div className='nav'>
            <a href='/home'><div className='logo'></div></a>
            <div className='line'></div>
            <div className='menu'>
            <Link to='/home'>Home</Link>
                <Link to='/destinations'><span>01</span> Destination</Link>
                <Link to='/crew'><span>02</span> Crew</Link>
                <Link to='/technology'><span>03</span> Technology</Link>
                <button onClick={HideMobileNav} className='btn-cross'>
                <ImCross />
            </button>
            </div>
            <button onClick={ShowMobileNav} className='btn-burger'>
                <GiHamburgerMenu />
            </button>
        </div>
    )
}

export default Nav;