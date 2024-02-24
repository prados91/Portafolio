import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Tech.css'

const Tech = ({ front, back, learn, techs }) => {

    return (
        <section className="projectsContainer " id="projects">
            <Container>
                <Row className='techRow'>
                    <Col md={6} xs={12} className='techItem'>
                        <article className="article-container">
                            <div className="overlay"></div>
                            <h3 className="article-title">FrontEnd</h3>
                            <ul className="grid">
                                {front.map((icons) => (
                                    <li className="grid-item" key={icons.id}>
                                        <img src={`${icons.image}`} alt={icons.title} />
                                        <span className="grid-item-text">{icons.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </Col>
                    <Col md={6} xs={12} className='techItem'><article className="article-container">
                        <div className="overlay"></div>
                        <h3 className="article-title">BackEnd</h3>
                        <ul className="grid">
                            {back.map((icons) => (
                                <li className="grid-item" key={icons.id}>
                                    <img src={`${icons.image}`} alt={icons.title} />
                                    <span className="grid-item-text">{icons.title}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                    </Col>
                </Row>
                <Row className='techRow'>
                    <Col md={6} xs={12} className='techItem'><article className="article-container">
                        <div className="overlay"></div>
                        <h3 className="article-title">Learning</h3>
                        <ul className="grid">
                            {learn.map((icons) => (
                                <li className="grid-item" key={icons.id}>
                                    <img src={`${icons.image}`} alt={icons.title} />
                                    <span className="grid-item-text">{icons.title}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                    </Col>
                    <Col md={6} xs={12} className='techItem'><article className="article-container">
                        <div className="overlay"></div>
                        <h3 className="article-title">Technologies</h3>
                        <ul className="grid">
                            {techs.map((icons) => (
                                <li className="grid-item" key={icons.id}>
                                    <img src={`${icons.image}`} alt={icons.title} />
                                    <span className="grid-item-text">{icons.title}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Tech

