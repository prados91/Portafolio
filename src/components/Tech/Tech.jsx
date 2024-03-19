import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Tech.css'
import TechList from './TechList';

const Tech = ({ front, back, learn, techs }) => {

    return (

        <Container>
            <section className="techContainer container-fluid " id="projects">
                <Row className='techRow'>
                    <TechList tech={front} name={"FrontEnd"} brk_md={6} brk_xs={12} />
                    <TechList tech={back} name={"BackEnd"} brk_md={6} brk_xs={12} />
                    <TechList tech={learn} name={"Learning"} brk_md={6} brk_xs={12} />
                    <TechList tech={techs} name={"Technologies"} brk_md={6} brk_xs={12} />
                </Row>
            </section>
        </Container>
    );
};

export default Tech

