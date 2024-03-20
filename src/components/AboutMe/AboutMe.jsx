import React from "react";
import Skills from "../Skills/Skills";
import Tech from "../Tech/Tech";
import { useState, useEffect } from "react";
import { FaFileDownload } from "react-icons/fa";

import { icons } from '../../assets/db.js'

import './AboutMe.css'
const AboutMe = () => {

    const [front, setFront] = useState([]);
    const [back, setBack] = useState([]);
    const [learn, setLearn] = useState([]);
    const [techs, setTechs] = useState([]);

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
        getIcons();
    }, []);

    return (
        <div className="container">
            <div className="AboutPage">
                <div className="AboutText">
                    <h1 className="AboutTextHeading">
                        Get to <b>know</b> me!
                    </h1>
                    <p>Soy Ingeniero eléctronico orientado a la programación tanto industrial como web.<br />
                        Me especializo más en FrontEnd pero tengo conocimientos en Backend y otros lenguajes.</p>
                    <br />

                    <a href="Resume.pdf" download className="resume-btn">
                        <button>
                            Download Resume <FaFileDownload></FaFileDownload>
                        </button>
                    </a>
                </div>
                <div></div>
            </div>

            <h1 className="SkillsHeading"> Skillset</h1>
            <div className="skills">
                <Skills skill="HTML" />
                <Skills skill="CSS" />
                <Skills skill="Bootstrap" />
                <Skills skill="Javascript" />
                <Skills skill="React" />
                <Skills skill="Github" />
                <Skills skill="Figma" />
                <Skills skill="Npm" />
            </div>

            <section>
                <Tech front={front} back={back} learn={learn} techs={techs} />
            </section>
        </div>
    );
};

export default AboutMe;