/*
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/AP_Logo_Min.png'
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toggle_light from '../../assets/night.png'
import toggle_dark from '../../assets/day.png'
import './NavBar.css'
import { backIn } from 'framer-motion'
import { background } from '@chakra-ui/react'

const NavBar = ({ theme, setTheme }) => {

    const toggle_mode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light')
    }

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const closeNav = () => {
        scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
        setIsNavOpen(false);
    };

    const logoSrc = theme === "light" ? logo : logo_dark

    const changeMode = theme === "light" ? "" : "dark"

    const toggleMode = theme === 'light' ? toggle_light : toggle_dark

    return (

        <nav className={`navbar_container navbar navbar-expand-lg ${changeMode}`}>
            <div className={`container-fluid ${changeMode}`}>
                <Link to='/' onClick={closeNav} >
                    <img src={logoSrc} className='navbar_logo' alt="Logo del portafolio" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse navbar_items navbar_collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto navbar_ul" >
                        {/*<NavLink to='/about-me' className={({ isActive }) => isActive ? "navbar_link linkActive" : `navbar_link${changeMode}`} onClick={closeNav}>About Me</NavLink>
                        <NavLink to='/contact' className={({ isActive }) => isActive ? "navbar_link linkActive" : `navbar_link${changeMode}`} onClick={closeNav}>Contact</NavLink>/
                       <NavLink to='/projects' className={({ isActive }) => isActive ? "navbar_link linkActive" : `navbar_link${changeMode}`} onClick={closeNav}>My Projects</NavLink>
/*<Link to='/about' className={`navbar_link${changeMode}`}>About Me</Link>
<Link to='/contact' className={`navbar_link${changeMode}`}>Contact</Link>
<Link to='/Projects' className={`navbar_link${changeMode}`}>My Projects</Link>
</ul>
<img onClick={() => { toggle_mode() }} src={toggleMode} alt="Logo Light/Dark" className='navbar_toggleIcon' />
</div>
</div>
</nav >
)
}

export default NavBar

//navbar */
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../../assets/img/AP_Logo_Min.png';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import navIcon4 from '../../assets/img/nav-icon4.svg'
import { HashLink } from 'react-router-hash-link';
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import './NavBar.css'

const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (

        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="Logo" className="navbar_logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#aboutMe" className={activeLink === 'aboutMe' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutMe')}>About Me</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="#"><img src={navIcon1} alt="" /></a>
                                {/* <a href="#"><img src={navIcon2} alt="" /></a>
                                <a href="#"><img src={navIcon3} alt="" /></a>*/}
                                <a href="#"><img src={navIcon4} alt="" /></a>
                            </div>
                            <HashLink to='#connect'>
                                <button className=""><span>Let’s Connect</span></button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>

    )
}

export default NavBar
