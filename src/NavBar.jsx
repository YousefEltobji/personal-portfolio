import React, { useState, useEffect } from "react";
import logo from "./images/websitelogoUP.png";
import "./NavBar.css";
import { Link } from "react-scroll";


function Navbar() {
    const [focusedLink, setFocusedSet] = useState('home'); 

    const scrollHandler = () => {
        const positions = {
            'home': 0, 
            'aboutme': 550, 
            'skills': 1200, 
            'projects': 2000 
        };

        const scrollPosition = window.scrollY;
        let activeSection = 'home'; 
        if (scrollPosition >= positions['projects']) {
            activeSection = 'projects';
        } else if (scrollPosition >= positions['skills']) {
            activeSection = 'skills';
        } else if (scrollPosition >= positions['aboutme']) {
            activeSection = 'aboutme';
        }
        setFocusedSet(activeSection);
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    return (
        <div className="navbar-container">
            <img className="navbar-image" src={logo} alt="Personal Logo"></img>
            <div className="navbar-links">
                <ul className="navbar-links">
                    <li><Link to="herosection-container" smooth={true} spy={true} tabIndex="0"
                        className={`link-button ${focusedLink === 'home' ? 'focused' : ''}`}
                        onFocus={() => setFocusedSet('home')}>Home</Link></li>
                    <li><Link to="aboutme-container" smooth={true} spy={true} tabIndex="0"
                        className={`link-button ${focusedLink === 'aboutme' ? 'focused' : ''}`}
                        onFocus={() => setFocusedSet('aboutme')}>About Me</Link></li>
                    <li><Link to="skills-container" smooth={true} spy={true} tabIndex="0"
                        className={`link-button ${focusedLink === 'skills' ? 'focused' : ''}`}
                        onFocus={() => setFocusedSet('skills')}>Skills</Link></li>
                    <li><Link to="project-container" smooth={true} spy={true} tabIndex="0"
                        className={`link-button ${focusedLink === 'projects' ? 'focused' : ''}`}
                        onFocus={() => setFocusedSet('projects')}>Projects</Link></li>
                </ul>
            </div>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/yousefeltobji">
                <button className="contact-button">Contact Me</button>
            </a>
        </div>
    );
}

export default Navbar;
