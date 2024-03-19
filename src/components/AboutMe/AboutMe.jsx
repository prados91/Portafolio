import React from "react";
import Skills from "../Skills/Skills";
import { FaFileDownload } from "react-icons/fa";

import './AboutMe.css'
const AboutMe = () => {
    return (
        <>
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
                <Skills skill="Tailwind" />
                <Skills skill="Javascript" />
                <Skills skill="React" />
                <Skills skill="Git" />
                <Skills skill="Github" />
                <Skills skill="C++" />
                <Skills skill="Figma" />
                <Skills skill="Npm" />
            </div>
        </>
    );
};

export default AboutMe;