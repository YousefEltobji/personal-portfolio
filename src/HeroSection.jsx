import React from "react";
import "./HeroSection.css";
import { Link } from "react-scroll";

const HeroSection = () => {
    return ( 
        <div className="herosection-container">
            <div className="herosection-content">
                <h3>Hello, my name is Yousef Eltobji</h3>
                <h2>I'm a Computer Science Student</h2>
                <p>I'm currently attending Wayne State University and seeking an internship</p>
                <Link to="project-container" smooth={true}><button className="herosection-button" >View Projects</button></Link>
            </div>
        </div>
    );
};

export default HeroSection;