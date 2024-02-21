import React from 'react'
import './IndexContainer.css'
import AboutMe from '../AboutMe/AboutMe'
import Contact from '../Contact/Contact'
import MyProjects from '../MyProjects/MyProjects'
import Resume from '../Resume/Resume'

const IndexContainer = ({ theme, setTheme }) => {
    return (
        <div className='container'>

            <Resume />

        </div>
    )
}

export default IndexContainer; // Debes aplicar la transición al componente aquí
