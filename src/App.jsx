import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar/NavBar'
import IndexContainer from './components/IndexContainer/IndexContainer'
import AboutMe from './components/AboutMe/AboutMe'
import Contact from './components/Contact/Contact';
import MyProjects from './components/MyProjects/MyProjects';
import Footer from './components/Footer/Footer';

import './App.css'
import Resume from './components/Resume/Resume';

function App() {
    const [theme, setTheme] = useState('light')



    return (

        <div className="App">
            <NavBar />
            <Resume />

            <Footer />
        </div>

    )

}

export default App


{/*
        <BrowserRouter>
            <NavBar theme={theme} setTheme={setTheme} />
            <Routes>
                <Route index element={<IndexContainer theme={theme} setTheme={setTheme} />} />
                <Route path="/about" element={<AboutMe theme={theme} setTheme={setTheme} />} />
                <Route path="/contact" element={<Contact theme={theme} setTheme={setTheme} />} />
                <Route path="/projects" element={<MyProjects theme={theme} setTheme={setTheme} />} />
            </Routes>
            <Footer year={year} />
        </BrowserRouter>
    */}