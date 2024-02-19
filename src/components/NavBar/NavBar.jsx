import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/react.svg'
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toggle_light from '../../assets/night.png'
import toggle_dark from '../../assets/day.png'
import './NavBar.css'

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

    return (

        <nav className={`navbar navbar-expand-lg ${theme == 'light' ? "" : "dark"}`}>
            <div className={`container-fluid pl-4 pr-4 ${theme == 'light' ? "" : "dark"}`}>
                <Link to='/' onClick={closeNav}><img src={theme == 'light' ? logo_light : logo_dark} className='navbar_logo' alt="Logo del portafolio" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse navbar_items" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto" >
                        <NavLink to='/about-me' className={({ isActive }) => isActive ? "navbar_link linkActive" : `navbar_link${theme == 'light' ? "" : "-Dark"}`} onClick={closeNav}>About Me</NavLink>
                        <NavLink to='/contact' className={({ isActive }) => isActive ? "navbar_link linkActive" : `navbar_link${theme == 'light' ? "" : "-Dark"}`} onClick={closeNav}>Contact</NavLink>
                        <NavLink to='/projects' className={({ isActive }) => isActive ? "navbar_link linkActive" : `navbar_link${theme == 'light' ? "" : "-Dark"}`} onClick={closeNav}>My Projects</NavLink>
                    </ul>
                    <img onClick={() => { toggle_mode() }} src={theme == 'light' ? toggle_light : toggle_dark} alt="Logo Light/Dark" className='navbar_toggleIcon' />

                </div>
            </div>
        </nav>


    )
}

export default NavBar