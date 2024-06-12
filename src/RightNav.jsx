import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li {
        padding: 18px 10px;
    }

    @media (max-width: 1199px) {
        flex-flow: column nowrap;
        background-color: #FFFFFF;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 100px;
        transition: transform 0.3s ease-in-out;
        

    li {
        font-size: 1.5rem;
        color: black;
    }
}
`;

const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
            <li><Link to="herosection-container" smooth={true} spy={true} tabIndex="0" className="link-button">Home</Link></li>
            <li><Link to="aboutme-container" smooth={true} spy={true} tabIndex="0" className="link-button">About Me</Link></li>
            <li><Link to="skills-container" smooth={true} spy={true} tabIndex="0" className="link-button">Skills</Link></li>
            <li><Link to="project-container" smooth={true} spy={true} tabIndex="0" className="link-button">Projects</Link></li>
        </Ul>
    )
}

export default RightNav