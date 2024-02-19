import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar/NavBar'
import IndexContainer from './components/IndexContainer/IndexContainer'
import AboutMe from './components/AboutMe/AboutMe'
import Contact from './components/Contact/Contact';
import MyProjects from './components/MyProjects/MyProjects';
import Footer from './components/Footer/Footer';

import './App.css'

function App() {
    const [theme, setTheme] = useState('light')

    const date = new Date()
    const year = date.getFullYear()


    return (
        <BrowserRouter>
            
                <NavBar theme={theme} setTheme={setTheme} />

            <Routes>
                <Route exact path='/' element={<IndexContainer />} />
                <Route exact path="/about-me" element={<AboutMe />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/projects" element={<MyProjects />} />
            </Routes>
            <Footer year={year} />
        </BrowserRouter>
    )
}

export default App
