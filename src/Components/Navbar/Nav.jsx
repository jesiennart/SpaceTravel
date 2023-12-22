import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

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
            const cross = document.querySelector('.btn-cross')
            menu.classList.remove('show')
            burger.style.display = 'block'
        }


    return (
        <div className='nav'>
            <div className='logo'></div>
            <div className='line'></div>
            <div className='menu'>
                <a href='/home'><span>00</span> Home</a>
                <a href='/destinations'><span>01</span> Destination</a>
                <a href='/crew'><span>02</span> Crew</a>
                <a href='/technology'><span>03</span> Technology</a>
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