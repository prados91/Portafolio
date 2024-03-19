import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../../assets/img/AP_Logo_Min.png';
import iconLinkedIn from '../../assets/icons/icon-Linkedin.svg';
import iconFacebook from '../../assets/icons/icon-Facebook.svg';
import iconInstagram from '../../assets/icons/icon-Instagram.svg';
import iconGithub from '../../assets/icons/icon-Github.svg'
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
                                <a href="#"><img src={iconLinkedIn} alt="LinkedIn icon" /></a>
                                {/* <a href="#"><img src={iconFacebook} alt="Facebook icon" /></a>
                                <a href="#"><img src={iconInstagram} alt="Instagram icon" /></a> */}
                                <a href="#"><img src={iconGithub} alt="GitHub icon" /></a>
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
