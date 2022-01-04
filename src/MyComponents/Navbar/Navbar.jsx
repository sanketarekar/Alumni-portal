import React, { useState } from 'react';
import { NavLink as Link, useNavigate } from "react-router-dom";
import logo from '../../Images/logo.png';
// import { HashLink } from 'react-router-hash-link';

import './Navbars.css'
function Navbar() {
    // const user = JSON.parse(localStorage.getItem('token'));
    const navigate = useNavigate();
    function SignOut() {
        localStorage.clear();
        navigate('/');
    }

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
                {
                    localStorage.getItem('token') ?
                        <>
                             <li><Link className="navbar-home-button active" to='/'>Home</Link></li>
                            <li><Link to='/MyProfile'>My Profile</Link></li>
                            <li id='LogOutBtnOut' onClick={SignOut}><Link to='#' id='LogOutBtn'>Sign Out</Link></li>
                        </>
                        :
                        <>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/SignIn'>Sign In</Link></li>
                            <li><Link to='/SignUp'>Sign Up</Link></li>
                        </>
                }
                {/* <li><Link to='/'>Home</Link></li> */}
                {/* <li><Link to='/AboutUs'>About us</Link></li> */}
                {/* <li><Link to='/MyProfile'>My Profile</Link></li> */}
                {/* <li><HashLink to='/#VideoSection' activeClassName="active">Videos</HashLink></li> */}
                {/* <li><Link to='/SignIn'>Sign In</Link></li>
                <li><Link to='/SignUp'>Sign Up</Link></li>
                <li id='LogOutBtnOut' onClick={SignOut}><Link to='#' id='LogOutBtn'>Sign Out</Link></li> */}
            </ul>
        </nav>
    )
}

export default Navbar
