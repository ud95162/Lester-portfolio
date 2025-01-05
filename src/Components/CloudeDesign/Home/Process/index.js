import './process.css';
import React from "react";

const Process = () => {
    return (
        <>
            <div className="process_container">
                <div className="process_header">
                    <h3 style={{margin: 0}}>What We Do</h3>
                    <h1 style={{marginTop: "10px"}}>
                        HOW WE DELIVER RESULTS THROUGH OUR&nbsp;
                        <span
                            style={{
                                background: "linear-gradient(to right, #9d1cd0, #6519d1)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                fontWeight: "600",
                                fontSize: "48px",
                            }}> PROCESS
                            </span>
                    </h1>
                    <span>
                            We deliver design, marketing, and technology to grow your business. Focused on innovations, we help turn ideas into success.
                    </span>
                </div>

                <div className="process-card_container">
                    <div className="process-card-right_wrapper">
                        <div className="process-card-right_wrapper-body">
                            <div className="process-card_content">
                                <h2>Product Analysis</h2>
                                <span>
                            We provide business analysis, market insights, and tailored solutions to meet your goals.
                            Our process ensures clear goals, actionable plans, and accurate cost estimates.
                        </span>
                                <button className="read-more-btn">Read More</button>
                            </div>
                        </div>
                        <img src="/cloudedesign/ourprocess/analysis.png" alt="Product Analysis"
                             className="card-image_right"/>
                    </div>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <img src="/cloudedesign/icons/arrow.svg" alt="right-arrow" style={{width: "80px"}} className='first-arrow'/>
                    </div>
                    <div className="process-card-right_wrapper">
                        <div className="process-card-right_wrapper-body">
                            <div className="process-card_content">
                                <h2>Product Planing</h2>
                                <span>
                            We provide business analysis, market insights, and tailored solutions to meet your goals.
                            Our process ensures clear goals, actionable plans, and accurate cost estimates.
                        </span>
                                <button className="read-more-btn">Read More</button>
                            </div>
                        </div>
                        <img src="/cloudedesign/ourprocess/planning.png" alt="Product Analysis"
                             className="card-image_right"/>
                    </div>
                    <div></div>
                    <div></div>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}} className='order6'>
                        <img src="/cloudedesign/icons/arrow.svg" alt="right-arrow"
                             style={{width: "80px", transform: "rotate(90deg)"}}/>
                    </div>

                    <div className="process-card-right_wrapper">
                        <div className="process-card-left_wrapper-body">
                            <div className="process-card-left_content">
                                <h2>Product Delivery</h2>
                                <span>
                            With meticulous planning & top-level security, we ensure timely delivery and high-quality results.
                Real-time updates keep you informed every step of the way.
                        </span>
                                <button className="read-more-btn">Read More</button>
                            </div>
                        </div>
                        <img src="/cloudedesign/ourprocess/delivery.png" alt="Product Analysis"
                             className="card-image_left"/>
                    </div>

                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <img src="/cloudedesign/icons/arrow.svg" alt="right-arrow"
                             className="third-arrow" />
                    </div>

                    <div className="process-card-right_wrapper">
                        <div className="process-card-left_wrapper-body">
                            <div className="process-card-left_content" style={{width: "55%"}}>
                                <h2>Support & Maintenance</h2>
                                <span>
                            Our support ensures seamless functionality with quick assistance and flexible packages.
                The Premium package covers 95% of technical issues for reliable support.
                        </span>
                                <button className="read-more-btn">Read More</button>
                            </div>
                        </div>
                        <img src="/cloudedesign/ourprocess/support.png" alt="Support"
                             className="card-image_left"/>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Process;