import React from 'react'
import { useState, useEffect } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import headerImg from "../../assets/icons/icon-react.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import FilmImage from "../../images/Film.png";
import GymImage from "../../images/gym.png";
import ColourImage from "../../images/colour.png";
import BackpackImage from "../../images/backpack.png";

import ProjectBox from '../ProjectBox/ProjectBox';

import './MyProjects.css'

const MyProjects = () => {
    return (

        <section className=" projectsContainer " id="projects">
            <h1 className="projectHeading">
                My <b>Projects</b>
            </h1>
            <Container className="project">
                <ProjectBox projectPhoto={GymImage} projectName="Levels" />
                <ProjectBox projectPhoto={FilmImage} projectName="Movie" />
                <ProjectBox projectPhoto={ColourImage} projectName="ColourPalette" />
                <ProjectBox projectPhoto={BackpackImage} projectName="Backpack" />
            </Container>
        </section>
    )
}

export default MyProjects;