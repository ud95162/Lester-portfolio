import './careersummary.css';
import React from "react";

const CareerSummary = () => {
    return (
        <>
            <div className="career_summary_wrapper">
                <div className="summary_body">
                    <div className="summery-main">
                        <h1>
                        <span className="summery-header-span">
                                INNOVATIVE, INSPIRE, IMPACT
                            </span>
                            &nbsp;JOIN OUR TEAM!
                        </h1>

                        <div className="summery-description">
                            <span>Our integrated calendar feature transforms your
                                tasks and events into a dynamic to-do list,
                                helping you manage your time more efficiently</span>
                        </div>

                        <button className='summary_about-btn' style={{cursor: "pointer"}}>
                            See Job Details
                        </button>
                    </div>
                    <div className='summer-img'>
                        <img src="/cloudedesign/workwithus/robot.png" alt="robot"/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CareerSummary;