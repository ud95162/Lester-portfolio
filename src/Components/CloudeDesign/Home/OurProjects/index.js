import './ourprojects.css';
import React from "react";

const OurProjects = () => {
    return (
        <>
            <div className="projects_container">
                <div className="projects_header">
                    <h3 style={{margin: 0, color: "white"}}>Our Recent Projects</h3>
                    <h1 style={{marginTop: "10px", color: "white"}}>
                        OUR SUCCESS&nbsp;
                        <span
                            style={{
                                background: "linear-gradient(to right, #ebb500, #ec5b12)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                fontWeight: "600",
                                fontSize: "48px",
                            }}> STORIES
                            </span>
                    </h1>
                </div>

                <div style={{position: "relative", padding: "0 30px"}}>
                    <div className="projects_wrapper">
                        <div style={{display: "flex", justifyContent: "start", alignItems: "center"}}>
                            <img src="/cloudedesign/icons/right-arrow.svg" alt="left-arrow"
                                 style={{
                                     transform: "rotate(180deg)",
                                     cursor: "pointer",
                                     color: "white",
                                     width: "80px"
                                 }}/>
                        </div>
                        <div>
                            <img src="/cloudedesign/ourprojects/projects-01.png" alt="proj-01"/>
                        </div>
                        <div style={{display: "flex", justifyContent: "end", alignItems: "center"}}>
                            <img src="/cloudedesign/icons/right-arrow.svg" alt="left-arrow"
                                 style={{cursor: "pointer", width: "80px"}}/>
                        </div>
                    </div>


                    <div className="projects-bottom-span">
                        <span className="projects-bottom-span-text">We showcase a portfolio of successful projects highlighting
                        our expertise and impactful solutions</span>
                            <button
                                className="summary_about-btn"
                                style={{cursor: "pointer", marginTop: "0"}}
                            >
                                More Stories
                            </button>

                    </div>
                </div>

            </div>
        </>
    )
}

export default OurProjects;