import React, { useState } from 'react';
import { NavLink as Link } from "react-router-dom";
import logo from '../Images/logo.png';

import './Navbars.css'
function Navbar() {

    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 1) {
            setnav(true);
        }
        else {
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);
    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <Link to='/' className='logo'>
                <img src={logo} alt='' />
            </Link>
            <input type='checkbox' className='menu-btn' id='menu-btn' />
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/AboutUs'>About us</Link></li>
                {/* <li><Link to='/#VideoSection'>Videos</Link></li> */}
                <li><Link to='/SignIn'>Sign In</Link></li>
                <li><Link to='/SignUp'>Sign Up</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
