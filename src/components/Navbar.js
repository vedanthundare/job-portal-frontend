import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <h1>Job Portal</h1>
            <button className="hamburger" onClick={toggleMenu}>
                &#9776; 
            </button>
            <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
                <li><Link to="/">Job Listings</Link></li>
                <li><Link to="/apply">Apply for Job</Link></li>
                <li><Link to="/admin">Admin Dashboard</Link></li>
                <li><Link to="/chat">Chat with AI</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
