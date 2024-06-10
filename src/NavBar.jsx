import React from "react";
import logo from "./images/websitelogoUP.png";
import "./NavBar.css";
//import {Link} from "react-scroll";
//import { useState, useEffect } from "react";


function Navbar() {

    return (
        <div className="navbar-container">
                <img className="navbar-image" src={logo} alt="Personal Logo"></img>
            
            <div className="navbar-links">
                <a href="#">Home</a>
                <a href="#">About Me</a>
                <a href="#">Skills</a>
                <a href="#">Projects</a>
            </div>
                <a target="_blank" href="https://www.linkedin.com/in/yousefeltobji"><button className="contact-button">Contact Me</button></a>
        </div>
    );
};

export default Navbar;