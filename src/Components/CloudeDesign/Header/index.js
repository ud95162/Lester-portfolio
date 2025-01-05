import React, { useState, useEffect } from 'react';
import './header.css';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigate = () => {
        navigate('/contact-us');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            // Show the header only when scrolled down
            setShowHeader(window.scrollY > 0);
        };

        // Attach scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Conditionally render header based on route and scroll
    if (location.pathname === '/' && !showHeader) {
        return null; // Hide header
    }

    return (
        <div className="header">
            <div className="logo">
                <img src="/cloudedesign/cloude_logo_black.png" alt="logo" style={{ height: "60px" }} />
            </div>
            <div className="nav-bar">
                <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* Menu Items */}
                <ul className={`menu-items ${isMenuOpen ? 'show' : ''}`}>
                    <li className="nav-item"><a href="/public">HOME</a></li>
                    <li className="nav-item"><a href="/services">OUR SERVICES</a></li>
                    <li className="nav-item"><a href="/careers">WORK WITH US</a></li>
                    <li className="nav-item"><a href="/about">ABOUT US</a></li>
                    <li></li>
                </ul>

                {/* Get Template Button (visible on desktop only) */}
                <div className="menu-items">
                    <div className="nav-item">
                        <button className="header-button" style={{ cursor: "pointer" }} onClick={handleNavigate}>
                            Talk to Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
