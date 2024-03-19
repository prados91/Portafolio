import React from 'react'
import Col from 'react-bootstrap/Col';
import './Tech.css'
const TechList = ({ tech, name, brk_md, brk_xs }) => {
    return (
        <Col md={brk_md} xs={brk_xs} className='techItem'>
            <article className="article-container">
                <h3 className="article-title">{name}</h3>
                <ul className="grid">
                    {tech.map((e) => (
                        <li className="grid-item" key={e.id}>
                            <img src={`${e.image}`} alt={e.title} className='grid-img' />
                            <span className="grid-item-text">{e.title}</span>
                        </li>
                    ))}
                </ul>
            </article>
        </Col>
    )
}

export default TechList