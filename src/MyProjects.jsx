import React from "react";
import './MyProjects.css';
import { FaGithub } from "react-icons/fa";
import { MdConstruction } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import RESBuilderHomepageImg from "./images/RESBuilder-Homepage.png";

const MyProjects = () => {

    return (
        <div>
            <div className="project-container">
                <div className="project-intro">
                    <h2>My Projects</h2>
                    <a target="_blank" rel="noreferrer" href="https://github.com/YousefEltobji"><button><span><FaGithub size={35}/></span><p id="mobile-delete">Visit My GitHib</p></button></a>
                </div>
                <div className="project-section">
                    <div className="project-card">
                        <img id="projectlogo" src={RESBuilderHomepageImg} alt="RESBuilder Homepage Image"/>
                        <h3>RESBuilder</h3>
                        <p>RESBuilder is a dynamic web application built using ReactJS that allows users to upload and receive tailored feedback on their resumes, enhancing job application success.</p>
                        <p>Technologies used for this project include:</p>
                        <ul>
                            <li>React.JS</li>
                            <li>JavaScript</li>
                            <li>CSS</li>
                            <li>OpenAI API</li>
                            <li>Express.JS</li>
                        </ul>
                        <a><button className="project-button">View Project <span id="buttonlogo"><FaArrowTrendUp size={22}/></span></button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProjects