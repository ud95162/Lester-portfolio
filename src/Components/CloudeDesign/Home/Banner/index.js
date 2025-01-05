import './banner.css';
import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

const Banner = () => {
    const bannerImage = '/cloudedesign/banner.jpg';

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true); // State to toggle header visibility
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setShowHeader(window.scrollY === 0); // Show header only when scroll is 0
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const imageList = ['./cloudedesign/Adobe XD Logotype.png',
        './cloudedesign/angular.png',
        './cloudedesign/AWS (Amazon Web Services) Logotype.png',
        './cloudedesign/DigitalOcean Logotype.png',
        './cloudedesign/Docker Logotype.png',
        './cloudedesign/Git Logotype.png',
        './cloudedesign/Google Cloud Logotype.png',
        './cloudedesign/InVision Logotype.png',
        './cloudedesign/Magento Logotype.png',
        './cloudedesign/mysql.png',
        './cloudedesign/nodejs.png',
        './cloudedesign/Oracle Cloud Logotype.png',
        './cloudedesign/php.png',
        './cloudedesign/sass.png',
        './cloudedesign/Shopify Logotype.png',
        './cloudedesign/Sketch Logotype.png',
        './cloudedesign/Visual Studio Code Logotype.png',
        './cloudedesign/Wordpress Logotype.png'];

    return (
        <>
            <div className="banner_wrapper" style={{backgroundImage: `url(${bannerImage})`}}>
                {showHeader && (
                    <div className="banner_header">
                        <div className="banner_logo">
                            <img src='/cloudedesign/cloude_logo_white.png' alt="logo" style={{height: "60px"}}/>
                        </div>
                        <div className="banner_nav-bar">
                            <div className={`banner_hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            {/* Menu Items */}
                            <ul className={`banner_menu-items ${isMenuOpen ? 'show' : ''}`}>
                                <li className="banner_nav-item"><a href='/'>HOME</a></li>
                                <li className="banner_nav-item"><a href='/services'>OUR SERVICES</a></li>
                                <li className="banner_nav-item"><a href='/careers'>WORK WITH US</a></li>
                                <li className="banner_nav-item"><a href='/about'>ABOUT US</a></li>
                                <li></li>
                            </ul>

                            {/* Get Template Button (visible on desktop only) */}
                            <div className="banner_menu-items">
                                <div className="banner_nav-item">
                                    <button className='banner_header-button' style={{cursor: "pointer"}}
                                            onClick={handleNavigate}>Talk to Us
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "80vh"}}>
                    <div className="banner_header__title">
                        <h1 style={{color: "white", textAlign: "center"}}>
                            INNOVATIVE SOLUTIONS FOR A&nbsp;
                            <span
                                style={{
                                    background: "linear-gradient(to right, #ebb500, #ec5b12)", // Gradient background
                                    WebkitBackgroundClip: "text", // Clips the background to text
                                    WebkitTextFillColor: "transparent", // Makes the text transparent to show the gradient
                                    fontSize: "48px",
                                    fontWeight: "600",
                                }}
                            >
                                DIGITAL WORLD
                            </span>

                        </h1>
                        <span style={{color: "white", textAlign: "center"}}> We blend innovative design, strategic marketing, and advanced technology to help business
                        thrive in the digital landscape.</span>

                        <div style={{marginTop: "32px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <button className='banner_quotes_button' style={{cursor: "pointer"}}
                                    onClick={handleNavigate}>Get Quotes
                            </button>
                            <button className='banner_header-button' style={{cursor: "pointer", marginLeft: "16px"}}
                                    onClick={handleNavigate}>Get Started
                            </button>
                        </div>

                    </div>
                </div>

                <div className="banner_footer">
                    {imageList && imageList.length > 0 && (
                        <div className="image-ticker">
                            <div className="image-track">
                                {imageList.map((item, index) => {
                                    return (
                                        <img src={item} alt={item}/>
                                    )
                                })}
                                {imageList.map((item, index) => {
                                    return (
                                        <img src={item} alt={item}/>
                                    )
                                })}
                                {imageList.map((item, index) => {
                                    return (
                                        <img src={item} alt={item}/>
                                    )
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Banner;
