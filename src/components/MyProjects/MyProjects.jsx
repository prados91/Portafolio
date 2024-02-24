import React from 'react'
import { useState, useEffect } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import headerImg from "../../assets/icons/icon-react.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './MyProjects.css'

const MyProjects = () => {
    return (

        <section className="banner projectsContainer " id="projects">
            <Container>
                <Row>
                    <Col xs={6}>Projects</Col>
                    <Col xs={6}>Projects</Col>
                </Row>
            </Container>
        </section>
    )
}

export default MyProjects;