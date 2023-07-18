import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const Navbar = () => {
    return (
        <nav>
            <div>
                <h1>
                    <Link to="/">Riley O'Neil</Link>
                </h1>
            </div>
            <div>
                <ul>
                    <li>
                        <Link to="/portfolio"> Projects</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/Resume">Resume</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;