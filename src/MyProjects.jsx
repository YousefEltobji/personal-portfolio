import React from "react";
import 'MyProjects.css';



const MyProjects = () => {
    return (
        <div>
            <div className="project-container">
                <div className="project-intro">
                    <h2>My Projects</h2>
                </div>
                <div className="project-section">
                    <div className="project-card">
                        <img src={projectImg} alt="project jpg"></img>
                        <h3>Project 1</h3>
                        <ul>
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>C++</li>
                            <li>ReactJS</li>
                            <li>HTML</li>
                        </ul>
                    </div>
                    <div className="project-card">
                        <h3>Project 2</h3>
                        <ul>
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>RESTful APIs</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProjects