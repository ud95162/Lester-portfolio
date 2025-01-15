import './serviceBanner.css';
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ServiceBanner = ({ backgroundImage, defaultHeader, gradientHeader }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [activeNav, setActiveNav] = useState('/'); // State to track active navigation
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigate = (path) => {
        setActiveNav(path);
        navigate(path);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setShowHeader(window.scrollY === 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        // Set active nav based on current location
        setActiveNav(location.pathname);
    }, [location]);

    return (
        <>
            <div className="service-banner_wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
                {showHeader && (
                    <div className="banner_header">
                        <div className="banner_logo">
                            <img src='/cloudedesign/cloude_logo_white.png' alt="logo" style={{ height: "60px" }} />
                        </div>
                        <div className="banner_nav-bar">
                            <div className={`banner_hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            {/* Menu Items */}
                            <ul className={`banner_menu-items ${isMenuOpen ? 'show' : ''}`}>
                                <li className={`banner_nav-item ${activeNav === '/' ? 'active' : ''}`}>
                                    <a onClick={() => handleNavigate('/')}>HOME</a>
                                </li>
                                <li className={`banner_nav-item ${activeNav === '/services' ? 'active' : ''}`}>
                                    <a onClick={() => handleNavigate('/services')}>OUR SERVICES</a>
                                </li>
                                <li className={`banner_nav-item ${activeNav === '/work_with_us' ? 'active' : ''}`}>
                                    <a onClick={() => handleNavigate('/work_with_us')}>WORK WITH US</a>
                                </li>
                                <li className={`banner_nav-item ${activeNav === '/about' ? 'active' : ''}`}>
                                    <a onClick={() => handleNavigate('/about')}>ABOUT US</a>
                                </li>
                                <li></li>
                            </ul>

                            {/* Get Template Button */}
                            <div className="banner_menu-items">
                                <div className="banner_nav-item">
                                    <button className='banner_header-button' style={{ cursor: "pointer" }}
                                            onClick={() => handleNavigate('/contact')}>Talk to Us
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div style={{ display: "flex", justifyContent: "center", alignItems: "end", height: "70vh" }}>
                    <div className="banner_header__title">
                        <h1 style={{ color: "white", textAlign: "center" }} className="title">
                            {defaultHeader}&nbsp;
                            <span
                                style={{
                                    background: "linear-gradient(to right, #ebb500, #ec5b12)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    fontWeight: "600",
                                }} className="title"
                            >
                                {gradientHeader}
                            </span>
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceBanner;
