import React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CgPhone } from "react-icons/cg";

import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../../assets/img/AP_Logo_Min.png';
import iconLinkedIn from '../../assets/icons/icon-Linkedin.svg';
import iconFacebook from '../../assets/icons/icon-Facebook.svg';
import iconInstagram from '../../assets/icons/icon-Instagram.svg';
import iconGithub from '../../assets/icons/icon-Github.svg'


import './NavBar.css'

const NavBar = () => {

    const linkedinWeb = "https://www.linkedin.com/in/apradoslink/"
    const githubWeb = "https://github.com/prados91"
    const [navbarblur, setnavbarblur] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            setnavbarblur(true);
        } else {
            setnavbarblur(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

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



    return (

        <header>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Link to="/">
                        <img src={logo} alt="Logo" className="navbar_logo" />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/" className={({ isActive }) => isActive ? 'active navbar-link' : 'navbar-link'}>Home</NavLink>
                            <NavLink to="/about" className={({ isActive }) => isActive ? 'active navbar-link' : 'navbar-link'}>About Me</NavLink>
                            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active navbar-link' : 'navbar-link'}>Contact</NavLink>
                            <NavLink to="/skills" className={({ isActive }) => isActive ? 'active navbar-link' : 'navbar-link'}>Projects</NavLink>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <Link to={linkedinWeb} target="_blank"><img src={iconLinkedIn} alt="LinkedIn icon" /></Link>
                                <Link to={githubWeb} target="_blank"><img src={iconGithub} alt="GitHub icon" /></Link>
                            </div>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>

    );
};

export default NavBar;
