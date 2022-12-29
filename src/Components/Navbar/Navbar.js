import React, { useState } from 'react';
import { useNavigate, NavLink, Link } from 'react-router-dom';
import './Navbar.css';



const Navbar = () => {


    let navigate = useNavigate();

    const hamburgerIcon =
        <svg className='hamburger' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3rg/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H21C21.4142 5.25 21.75 5.58579 21.75 6C21.75 6.41421 21.4142 6.75 21 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6ZM2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H21C21.4142 11.25 21.75 11.5858 21.75 12C21.75 12.4142 21.4142 12.75 21 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12ZM3 17.25C2.58579 17.25 2.25 17.5858 2.25 18C2.25 18.4142 2.58579 18.75 3 18.75H21C21.4142 18.75 21.75 18.4142 21.75 18C21.75 17.5858 21.4142 17.25 21 17.25H3Z" fill="#22272F"></path>
        </svg>

    const crossIcon =
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L12 10.9393L17.4697 5.46967C17.7626 5.17678 18.2374 5.17678 18.5303 5.46967C18.8232 5.76256 18.8232 6.23744 18.5303 6.53033L13.0607 12L18.5303 17.4697C18.8232 17.7626 18.8232 18.2374 18.5303 18.5303C18.2374 18.8232 17.7626 18.8232 17.4697 18.5303L12 13.0607L6.53033 18.5303C6.23744 18.8232 5.76256 18.8232 5.46967 18.5303C5.17678 18.2374 5.17678 17.7626 5.46967 17.4697L10.9393 12L5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967Z" fill="#22272F"></path>
        </svg>


    const [toggleNavbar, setToggleNavbar] = useState(true)

    const handleNavbar = () => {
        if (toggleNavbar === true) {
            setToggleNavbar(false);
        } else {
            setToggleNavbar(true)
        }
    }

    const showSidebar = () => {
        
    }

    const closeSidebar = () => {

    }


    // to show nav bar on scroll

    // const [navbar, setNavbar] = useState(false);

    // const showNav = () => {
    //     if(window.scrollY <= 50){
    //         setNavbar(false);
    //     }else{
    //         setNavbar(true);
    //     }
    // }

    // window.addEventListener('scroll', showNav)







    return (
        <>
            <div className="header-container">


                <div className="front-headline-container">
                    <div className="headline-static-text">
                        <p className='futura'><img src="Images/Home/contact-logo-2.png" alt="" /> +92 375 728 5462</p>
                        <p className='futura nav-show-desktop'><img src="Images/Home/contact-logo-1.png" alt="" /> info@solverscave.com</p>
                    </div>
                    <marquee className="headline-dynamic-text futura" >This is the dynamic text</marquee>
                </div>
                {/* <nav className={navbar ? 'show' : ""}> */}
                <nav>

                    <Link to='/'><img className='logo' src="Images/Navbar/logo.png" alt="" /></Link>
                    <ul className='ul-show-for-desktop'>
                        <li><NavLink to='/' className='futura'>Home</NavLink></li>
                        <li><NavLink to='/about' className='futura'>About</NavLink></li>
                        <li><NavLink to='/programs' className='futura'>Programs</NavLink></li>
                        <li><NavLink to='/blog' className='futura'>Blog</NavLink></li>
                        <li><NavLink to='/contact' className='futura'>Contact</NavLink></li>
                        <li><button className='login-button futura' onClick={() => navigate('/login')}>Log In</button></li>
                        <li><button className='signup-button futura' onClick={() => navigate('/signup')}>Sign Up</button></li>
                    </ul>


                    {/* For Hamburger Navbar */}


                    <button className='hamburger-icons' onClick={() => handleNavbar()}>
                        {toggleNavbar ? hamburgerIcon : crossIcon}
                    </button>



                </nav>

                <div className="mobile-sidebar">
                    <button className='cross hamburger-icons'>{crossIcon}</button>
                    <ul className='ul-show-for-mobile'>
                        
                        <li><NavLink to='/' className='futura'>Home</NavLink></li>
                        <li><NavLink to='/about' className='futura'>About</NavLink></li>
                        <li><NavLink to='/programs' className='futura'>Programs</NavLink></li>
                        <li><NavLink to='/blog' className='futura'>Blog</NavLink></li>
                        <li><NavLink to='/contact' className='futura'>Contact</NavLink></li>
                        <li><button className='login-button futura' onClick={() => navigate('/login')}>Log In</button></li>
                        <li><button className='signup-button futura' onClick={() => navigate('/signup')}>Sign Up</button></li>
                    </ul>
                </div>

            </div>

        </>
    )
}

export default Navbar;