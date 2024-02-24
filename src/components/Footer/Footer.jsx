import React from 'react'
import { format } from "@formkit/tempo"

import { Container, Row, Col } from "react-bootstrap";
//import { MailchimpForm } from "./MailchimpForm"; <MailchimpForm />
import logo from '../../assets/img/AP_Logo_Min.png';
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";


import './Footer.css'

const Footer = () => {


    const date = new Date()
    const now = format(date, { date: "medium", time: "short" })

    return (
        <footer className='footer_container footer'>
            <Container>
                <Row className="align-items-center">

                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt="Icon" /></a>
                            <a href="#"><img src={navIcon2} alt="Icon" /></a>
                            <a href="#"><img src={navIcon3} alt="Icon" /></a>
                        </div>
                        <p>Copyright {now} - All right reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer