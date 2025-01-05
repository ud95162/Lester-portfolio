import './summary.css';
import React from "react";


const Summary = () => {
    return(
        <>
            <div className="summary_wrapper">
                <div className="summary_body">
                    <div className="summery-main">
                        <h1>
                        <span className="summery-header-span">
                                ELEVATING
                            </span>
                            &nbsp;BRANDS THROUGH DESIGN, MARKETING, & TECHNOLOGY
                        </h1>

                        <div className="summery-description">
                        <span>We specialize in design, marketing, and technology to help business grow & thrive.
                     Our innovative solutions bridge creativity and strategy for impactful results.</span>
                        </div>

                        <button className='summary_about-btn' style={{cursor: "pointer"}}>
                            About CloudeDesign
                        </button>
                    </div>
                    <div className='summer-img'>
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