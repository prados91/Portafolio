import React from 'react'
import { format } from "@formkit/tempo"

import { Container, Row, Col } from "react-bootstrap";
import logo from '../../assets/img/AP_Logo_Min.png';
import iconLinkedIn from '../../assets/icons/icon-Linkedin.svg';
import iconFacebook from '../../assets/icons/icon-Facebook.svg';
import iconInstagram from '../../assets/icons/icon-Instagram.svg';
import iconGithub from '../../assets/icons/icon-Github.svg'


import './Footer.css'

const Footer = () => {

    const date = new Date()
    const now = format(date, { date: "medium", time: "short" })

    return (
        <footer className='footer_container footer'>
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" className='footer_logo' />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="#" target="_blank"><img src={iconLinkedIn} alt="Linkedin icon" /></a>
                            <a href="#" target="_blank"><img src={iconGithub} alt="GitHub icon" /></a>
                        </div>
                        <p>Copyright {now} - All right reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer