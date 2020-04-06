import React from 'react';
import './navbar.css';
import './../../../App.css'
import HD from '../../../images/HD.png';
import Download from '../../../images/download.jpg';
import Hollywood from '../../../images/hollywood.jpg';
import Logo from '../../../images/logo.jpg';

function Navbar() {
    return (
        <div className='nav-bar'>
            <div className='container-max-width'>
                <span className='nav-bar-title'>
                    <a href=""><img src={Logo} className='logo' /></a>
                </span>
                <ul className='nav-bar-items'>
                    <li><a href='#'><img src={Hollywood} /></a></li>
                    <li><a href='#'><img src={HD} /></a></li>
                    <li><a href="#"><img src={Download} /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
