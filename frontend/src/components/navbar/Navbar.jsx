import React, { useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineBars3 } from "react-icons/hi2";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navdirection = useNavigate();

    const navDirection = () => {
        navdirection('./map')
    }

    return (
        <div className='Navbar-container'>
            <nav>
                <div className="company-logo">
                    <img src="https://fse.jegtheme.com/taxico/wp-content/uploads/sites/38/2025/01/taxico-logo.webp" alt="Logo" />
                </div>

                {/* Show navigation when menuOpen is true */}
                <div className={`all-navigation ${menuOpen ? "active" : ""}`}>
                    <Link to='/' className='all-navigation-link'>Home</Link>
                    <Link to='about' className='all-navigation-link'>About</Link>
                    <Link to='service' className='all-navigation-link'>Services</Link>
                    <Link to='dashboard' className='all-navigation-link'>dashboard</Link>
                    <Link to='blogpage' className='all-navigation-link'>Blog</Link>
                    <Link to='contact' className='all-navigation-link'>Contact</Link>
                </div>

                <div className={`directTheRide ${menuOpen ? "active" : ""}`} onClick={navDirection}>
                    <p>Let's Ride Now!</p>
                </div>

                {/* Menu Toggle Button */}
                <div className="phone-view" onClick={() => setMenuOpen(!menuOpen)}>
                    <HiOutlineBars3 />
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
