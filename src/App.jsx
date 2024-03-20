import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
//import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loading from './components/Loading/Loading';
import NavBar from './components/NavBar/NavBar.jsx'
import AboutMe from './components/AboutMe/AboutMe'
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import MyProjects from './components/MyProjects/MyProjects';
import Home from './components/Home/Home.jsx';
import Skills from './components/Skills/Skills';
import Tech from './components/Tech/Tech';

import MoveToTop from "./components//MoveToTop/MoveToTop";

import { icons } from './assets/db.js';

import './App.css'

function App() {

    const [front, setFront] = useState([]);
    const [back, setBack] = useState([]);
    const [learn, setLearn] = useState([]);
    const [techs, setTechs] = useState([]);
    const [loading, setLoading] = useState(true);

    const getIcons = async () => {
        try {
            const frontIcons = icons.filter(icon => icon.tech === "front");
            const backIcons = icons.filter(icon => icon.tech === "back");
            const learnIcons = icons.filter(icon => icon.tech === "learn");
            const techIcons = icons.filter(icon => icon.tech === "tech");

            setFront(frontIcons);
            setBack(backIcons);
            setLearn(learnIcons);
            setTechs(techIcons);

            //setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setLoading(true);
        getIcons();
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    return (

        <div>
            {loading ? (
                <Loading />
            ) : (
                < >
                    <NavBar />
                    <MoveToTop />
                    <TransitionGroup>
                        <CSSTransition key={location.key} classNames="fade" timeout={500}>
                            <Routes location={location}>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<AboutMe />} />
                                <Route path="/projects" element={<MyProjects />} />
                                <Route path="/contact" element={<Contact />} />
                            </Routes>
                        </CSSTransition>
                    </TransitionGroup>
                    <Footer />
                    <MoveToTop />
                </>
            )}
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