import React from "react";
import "./SkillsSection.css";
import { FaRandom } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

const SkillsSection = () => {
    return (
        <div className="skills-container">
            <div className="skills-intro">
                <h2>My Skills</h2>
            </div>
            <div className="skills-section">
                <div className="skills-card">
                    <span id="skillslogo"><FaCode size={45} /></span>
                    <h3>Languages</h3>
                    <ul>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>C++</li>
                        <li>ReactJS</li>
                        <li>HTML</li>
                    </ul>
                </div>
                <div className="skills-card">
                    <span id="skillslogo"><FaRandom size={45}/></span>
                    <h3>Other Skills</h3>
                    <ul>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>RESTful APIs</li>
                        <li>CSS</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SkillsSection