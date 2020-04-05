import React from 'react';
import './navbar.css';
import HD from '../../images/HD.png';
import Download from '../../images/download.jpg';
import Hollywood from '../../images/hollywood.jpg';
import Logo from '../../images/logo.jpg';

function Navbar() {
    return (
        <div className='nav-bar'>
            <span className='nav-bar-title'>
                <a href=""><img src={Logo} className='logo' /></a>
            </span>
            <ul className='nav-bar-items'>
                <li><img src={Hollywood} /></li>
                <li><img src={HD} /></li>
                <li><img src={Download} /></li>
            </ul>
        </div>
    )
}

export default Navbar