import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div>
                <h1>
                    <NavLink to="/Home">Riley O'Neil</NavLink>
                </h1>
            </div>
            <div>
                <ul>
                    <li>
                        <NavLink to="/Portfolio"> Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Resume">Resume</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;