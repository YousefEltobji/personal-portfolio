import React from "react";
import "./SkillsSection.css";
import codingImg from "./images/coding-img.png";

const SkillsSection = () => {
    return (
        <div className="skills-container">
            <div className="skills-intro">
                <h2>My Skills</h2>
            </div>
            <div className="skills-section">
                <div className="skills-card">
                    <img src={codingImg} alt="coding jpg"></img>
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