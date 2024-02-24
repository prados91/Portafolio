import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loading from './components/Loading/Loading';
import NavBar from './components/NavBar/NavBar'
import AboutMe from './components/AboutMe/AboutMe'
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import MyProjects from './components/MyProjects/MyProjects';
import Resume from './components/Resume/Resume';
import Skills from './components/Skills/Skills';
import Tech from './components/Tech/Tech';

import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";


import './App.css'

function App() {
    const [theme, setTheme] = useState('light')

    const [front, setFront] = useState([]);
    const [back, setBack] = useState([]);
    const [learn, setLearn] = useState([]);
    const [techs, setTechs] = useState([]);
    const [load, setLoad] = useState(true);

    const getIcons = async () => {
        const db = getFirestore();
        const dbIcons = collection(db, "icons");

        try {
            const dbFront = query(dbIcons, where("tech", "==", "frontend"))
            const dbBack = query(dbIcons, where("tech", "==", "backend"))
            const dbLearn = query(dbIcons, where("tech", "==", "learning"))
            const dbTechs = query(dbIcons, where("tech", "==", "tech"))

            const [frontDocs, backDocs, learnDocs, techsDocs] = await Promise.all([
                getDocs(dbFront),
                getDocs(dbBack),
                getDocs(dbLearn),
                getDocs(dbTechs)
            ]);

            setFront(frontDocs.docs.map(doc => ({ id: doc.id, ...doc.data() })).sort((a, b) => a.id - b.id));
            setBack(backDocs.docs.map(doc => ({ id: doc.id, ...doc.data() })).sort((a, b) => a.id - b.id));
            setLearn(learnDocs.docs.map(doc => ({ id: doc.id, ...doc.data() })).sort((a, b) => a.id - b.id));
            setTechs(techsDocs.docs.map(doc => ({ id: doc.id, ...doc.data() })).sort((a, b) => a.id - b.id));
            setLoad(false);
        } catch (error) {
            console.log(error);
        }

    };

    useEffect(() => {
        setLoad(true);
        getIcons();
    }, []);

    return (

        <div>
            {load ? (<Loading />) :
                (<div >
                    <header>
                        <NavBar />
                    </header>
                    <Resume />
                    <MyProjects />
                    <Skills />
                    <Tech front={front} back={back} learn={learn} techs={techs} />
                    <Footer />
                </div>
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