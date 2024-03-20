import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/icons/icon-react.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import { Link } from "react-router-dom";
import Type from "../Type/Type";
import Tilt from "react-parallax-tilt";
//import Avatar from "../images/Avatar.png";
import { CgPhone } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";

import './Home.css'

const Resume = () => {

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <div className="HomePage">
                            <div className="HomeText">
                                <span className="tagline">Welcome to my Portfolio</span>
                                <h1>
                                    I'M <b>Augusto Prados!</b>
                                </h1>
                                <Type />
                                <Link to="/About">
                                    <button className="homebtn">
                                        About Me
                                        <BsPerson />
                                    </button>
                                </Link>

                                <Link to="/Contact">
                                    <button className="homebtn">
                                        Contact <CgPhone />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <Tilt>
                            <img className="Avatar" src={headerImg} alt="" />
                        </Tilt>
                    </Col>
                    {/*
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img" />
                                </div>}
                        </TrackVisibility>
                    </Col>*/}
                </Row>
            </Container>
        </section>

    )
}

export default Resume; // Aplica la transición al componente antes de exportarlo
