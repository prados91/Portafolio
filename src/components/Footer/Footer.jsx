import React from 'react'
import './Footer.css'

const Footer = ({ year }) => {
    return (
        <footer className='footer_container'>
            <p>Copyright {year} - Todos los derechos reservados.</p>
        </footer>
    )
}

export default Footer