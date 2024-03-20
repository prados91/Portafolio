import React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CgPhone } from "react-icons/cg";

import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../../assets/img/AP_Logo_Min.png';
import iconLinkedIn from '../../assets/icons/icon-Linkedin.svg';
import iconGithub from '../../assets/icons/icon-Github.svg'



import './NavBar.css'

const NavBar = () => {

    const linkedinWeb = "https://www.linkedin.com/in/apradoslink/"
    const githubWeb = "https://github.com/prados91"

    const [activeLink, setActiveLink] = useState('home');
    const [navbarblur, setnavbarblur] = useState(false);
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

        <header>
            <Navbar expand="lg" fixed="top" className={scrolled ? "scrolled " : ""}>
                <Container>
                    <Link to="/">
                        <img src={logo} alt="Logo" className="navbar-logo" />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" >
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto ">
                            <NavLink to="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</NavLink>
                            <NavLink to="/about" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>About</NavLink>
                            <NavLink to="/projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</NavLink>
                            <NavLink to="/contact" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</NavLink>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a to={linkedinWeb} target="_blank"><img src={iconLinkedIn} alt="LinkedIn" /></a>
                                <a to={githubWeb} target="_blank"><img src={iconGithub} alt="GitHub" /></a>
                            </div>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>

    );
};

export default NavBar;
