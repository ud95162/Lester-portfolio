import './ourprojects.css';
import React, { useState, useEffect } from "react";

const OurProjects = () => {

    const projects = [
        {
            image: "/cloudedesign/ourprojects/projects-01.png",
            description: "Metro Pulse (Pvt) Ltd delivers innovative tech products and services in Sri Lanka, specializing in web design, development, and e-commerce solutions tailored to your business needs.",
            url: "https://metroplus.lk"
        },
        {
            image: "/cloudedesign/ourprojects/ipermit_.png",
            description: "Ipermit Ltd delivers innovative company web provide web design service for coporate needs.",
            url: "https://www.ipermitusa.com/"
        },
        {
            image: "/cloudedesign/ourprojects/playhouse.png",
            description: "PlayHouse.org offers professional website development and seamless registration systems to streamline your organization's online presence and user management.",
            url: "https://playhouse.lk"
        },
        {
            image: "/cloudedesign/ourprojects/laptopcare.png",
            description: "Laptop Care (Pvt) Ltd provides cutting-edge tech solutions in Sri Lanka, specializing in laptop services, SEO optimization, Google search ad campaigns, web design, and e-commerce solutions to elevate your business.",
            url: "https://laptopcare.lk"
        },
        {
            image: "/cloudedesign/ourprojects/geegstore.png",
            description: "Geegstore specializes in web design, development, and tailored e-commerce solutions to help businesses thrive in the digital marketplace.",
            url: "https://geegstore.lk"
        },
        {
            image: "/cloudedesign/ourprojects/studiocloudy.png",
            description: "Studio Cloudy offers professional web design and development services tailored for wedding photographers, creating stunning, user-friendly websites to showcase your work beautifully.",
            url: "https://studiocloudy.com/"
        },
        {
            image: "/cloudedesign/ourprojects/mymedweb.png",
            description: "We provide tailored e-commerce web solutions for MyMed (Pvt) Ltd, enabling seamless online operations and enhanced customer experiences.",
            url: "https://mymed.lk"
        },
        {
            image: "/cloudedesign/ourprojects/poolguard.png",
            description: "We provide web development solutions for Poolguard.au.co, an Australian pool service company based in Western Australia, ensuring a professional online presence and user-friendly functionality.",
            url: "https://poolguardwa.com.au/"
        },
        {
            image: "/cloudedesign/ourprojects/tc.png",
            description: "We provide web design services for Trafford Ceylon (Pvt) Ltd, a Sri Lankan tea export company with operations in the USA, creating elegant and professional websites to showcase their global presence.",
            url: "https://traffordceylon.lk/"
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
            description: "We provide corporate website solutions for Miracal Agro (Pvt) Ltd, a leading company in Sri Lanka's agriculture sector, delivering a professional online presence to enhance their brand and operations.",
            url: "https://miracleagro.lk/"
        },
        {
            image: "/cloudedesign/ourprojects/exsolproject.png",
            description: "We provide web design and development services for Exsol (Pvt) Ltd, an engineering company in Sri Lanka, creating innovative and functional websites to enhance their digital presence.",
            url: "https://exsol.lk"
        },
        {
            image: "/cloudedesign/ourprojects/kemyo2.png",
            description: "We provide web design and development services for Kemyo (Pvt) Ltd, an architecture company, creating visually striking and functional websites to showcase their expertise and projects.",
            url: "https://kemyo.lk"
        },
        {
            image: "/cloudedesign/ourprojects/spicyproject.png",
            description: "Project description",
            url: "https://spicesusa.com/"
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
