import './ourprojects.css';
import React, { useState, useEffect } from "react";

const OurProjects = () => {

    const projects = [
        {
            image: "/cloudedesign/ourprojects/projects-01.png",
            description: "We showcase a portfolio of successful projects highlighting our expertise and impactful solutions",
            url: "https://metroplus.lk"
        },
        {
            image: "/cloudedesign/ourprojects/playhouse.png",
            description: "Project description",
            url: "https://playhouse.lk"
        },
        {
            image: "/cloudedesign/ourprojects/laptopcare.png",
            description: "Project description",
            url: "https://playhouse.lk"
        },
        {
            image: "/cloudedesign/ourprojects/geegstore.png",
            description: "Project description",
            url: "https://playhouse.lk"
        },
        {
            image: "/cloudedesign/ourprojects/studiocloudy.png",
            description: "Project description",
            url: "https://playhouse.lk"
        },
        {
            image: "/cloudedesign/ourprojects/mymedweb.png",
            description: "Project description",
            url: "https://playhouse.lk"
        },
        {
            image: "/cloudedesign/ourprojects/poolguard.png",
            description: "Project description",
            url: "https://playhouse.lk"
        },
        {
            image: "/cloudedesign/ourprojects/tc.png",
            description: "Project description",
            url: "https://playhouse.lk"
        },
        {
            image: "/cloudedesign/ourprojects/projects-02.png",
            description: "Project description",
            url: "https://playhouse.lk"
        },
        {
            image: "/cloudedesign/ourprojects/projects-03.png",
            description: "Project description",
            url: "https://playhouse.lk"
        },
        {
            image: "/cloudedesign/ourprojects/projects-05.png",
            description: "Project description",
            url: "https://playhouse.lk"
        },
        {
            image: "/cloudedesign/ourprojects/miracalagro.png",
            description: "Project description",
            url: "https://playhouse.lk"
        },
        {
            image: "/cloudedesign/ourprojects/exsolproject.png",
            description: "Project description",
            url: "https://playhouse.lk"
        },
        {
            image: "/cloudedesign/ourprojects/kemyo2.png",
            description: "Project description",
            url: "https://playhouse.lk"
        },
        {
            image: "/cloudedesign/ourprojects/sennya.png",
            description: "Project description",
            url: "https://playhouse.lk"
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0); // State for current project index
    const [isAnimating, setIsAnimating] = useState(false); // State to control animation

    // Handle automatic transitions
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         handleNextProject();
    //     }, 3000); // Change project every 3 seconds
    //
    //     return () => clearInterval(interval); // Clear interval on unmount
    // }, []);

    const handleNextProject = () => {
        setIsAnimating(true); // Trigger animation
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === projects.length - 1 ? 0 : prevIndex + 1
            );
            setIsAnimating(false); // Reset animation after transition
        }, 500); // Match transition duration
    };

    const handlePreviousProject = () => {
        setIsAnimating(true); // Trigger animation
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? projects.length - 1 : prevIndex - 1
            );
            setIsAnimating(false); // Reset animation after transition
        }, 500); // Match transition duration
    };

    return (
        <>
        
            <div className="projects_container">
                <div className="projects_header">
                    <h3 style={{ margin: 0, color: "white" }}>Our Recent Projects</h3>
                    <h1 style={{ marginTop: "10px", color: "white" }} className='project_header'>
                        OUR SUCCESS&nbsp;
                        <span
                            style={{
                                background: "linear-gradient(to right, #ebb500, #ec5b12)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                fontWeight: "600",
                            }} className='project_header'
                        >
                            STORIES
                        </span>
                    </h1>
                </div>

                <div style={{ position: "relative", padding: "0 30px" }}>
                    <div className="projects_wrapper">
                        {/* Left Arrow */}
                        <div
                            style={{ display: "flex", justifyContent: "start", alignItems: "center" }}
                            onClick={handlePreviousProject}
                        >
                            <img
                                src="/cloudedesign/icons/right-arrow.svg"
                                alt="left-arrow"
                                style={{
                                    transform: "rotate(180deg)",
                                    cursor: "pointer",
                                    color: "white",
                                    width: "80px",
                                }}
                            />
                        </div>

                        {/* Current Project */}
                        <div
                            className={`projects_image-container ${
                                isAnimating ? "fade" : ""
                            }`} // Add fade animation
                        >
                            <img src={projects[currentIndex].image} alt={`proj-${currentIndex + 1}`} />
                        </div>

                        {/* Right Arrow */}
                        <div
                            style={{ display: "flex", justifyContent: "end", alignItems: "center" }}
                            onClick={handleNextProject}
                        >
                            <img
                                src="/cloudedesign/icons/right-arrow.svg"
                                alt="right-arrow"
                                style={{ cursor: "pointer", width: "80px" }}
                            />
                        </div>
                    </div>

                    <div className="projects-bottom-span">
                        <span className="projects-bottom-span-text">
                            {projects[currentIndex].description}
                        </span>
                        <button
                            className="summary_about-btn"
                            style={{ cursor: "pointer", marginTop: "0" }}
                            onClick={() => window.open(projects[currentIndex].url, '_blank', 'noopener,noreferrer')}
                        >
                            Explore
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurProjects;
