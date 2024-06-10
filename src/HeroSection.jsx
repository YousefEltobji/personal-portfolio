import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
    return ( 
        <div className="herosection-container">
            <div className="herosection-content">
                <h3>Hello, my name is Yousef Eltobji</h3>
                <h2>I'm a Computer Science Student</h2>
                <p>I'm currently attending Wayne State University and seeking an internship</p>
                <button className="herosection-button" href="">View Projects</button>
            </div>
        </div>
    );
};

export default HeroSection;