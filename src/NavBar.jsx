import React from "react";
import logo from "./images/websitelogoUP.png";
import "./NavBar.css";
import {Link} from "react-scroll";
//import { useState, useEffect } from "react";


function Navbar() {

    return (
        <div className="navbar-container">
                <img className="navbar-image" src={logo} alt="Personal Logo"></img>
            
            <div className="navbar-links">
                <Link to="herosection-container" smooth={true}>Home</Link>
                <Link to="aboutme-container" smooth={true}>About Me</Link>
                <Link to="skills-container" smooth={true}>Skills</Link>
                <Link to="project-container" smooth={true}>Projects</Link>
            </div>
                <a target="_blank" href="https://www.linkedin.com/in/yousefeltobji"><button className="contact-button">Contact Me</button></a>
        </div>
    );
};

export default Navbar;