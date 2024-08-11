import React from "react";
import "./AboutMe.css";
import profilePic from "./images/myimage.jpg";

const AboutMe = () => {
    return (
    <div>
        <div className="aboutme-container">
            <img src={profilePic} alt="picture of Yousef Eltobji"></img>
            <div className="aboutme-content">
                <h1>About Me</h1>
                <p>Hello, my name is Yousef Eltobji and I am a student at Wayne State University. I am currently working towards a Bachelor's degree in Software Engineering and am passionate about pursuing a career in this field. I am confident that my knowledge and experience in software engineering will be an asset to any organization.</p>
                <p id="mobile-delete">I have a strong background in computer science and programming, and I am proficient in a variety of programming languages, including JavaScript, C++, and Python. I have also developed several software applications, including a web-based application for a local business.</p>
            </div>
        </div>
    </div>
    );
};

export default AboutMe