import './summary.css';
import React from "react";


const Summary = () => {
    return(
        <>
            <div className="summary_wrapper">
                <div className="summary_body">
                    <div>
                        <h1>
                        <span
                            style={{
                                background: "linear-gradient(to right, #9d1cd0, #6519d1)", // Gradient background
                                WebkitBackgroundClip: "text", // Clips the background to text
                                WebkitTextFillColor: "transparent", // Makes the text transparent to show the gradient
                                fontSize: "48px",
                                fontWeight: "600",
                            }}
                        >
                                ELEVATING
                            </span>
                            &nbsp;BRANDS THROUGH DESIGN, MARKETING, & TECHNOLOGY
                        </h1>

                        <div style={{width: "60%"}}>
                        <span>We specialize in design, marketing, and technology to help business grow & thrive.
                     Our innovative solutions bridge creativity and strategy for impactful results.</span>
                        </div>

                        <button className='summary_about-btn' style={{cursor: "pointer"}}>
                            About CloudeDesign
                        </button>
                    </div>
                    <div>
                        <img src="/cloudedesign/robot.png" alt="robot"/>
                    </div>
                </div>

                <hr style={{
                    marginTop: "50px",
                    border: "none", /* Removes the default border */
                    height: "2px", /* Set the thickness of the line */
                    backgroundColor: "#cdcecf" /* Set your desired color */
                }}/>
            </div>

        </>
    )
}

export default Summary;