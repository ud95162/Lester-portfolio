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
                        We specialize in crafting exceptional&nbsp;
                        <a href="https://www.designrush.com/agency/profile/cloudedesign" target="_blank" rel="noopener noreferrer">
                            web designs in Sri Lanka
                        </a>,
                        empowering businesses of all sizes to build a powerful online presence.
                    </span>
                </div>

                <div className="process-card_container">
                    <div className="process-card-right_wrapper">
                        <div className="process-card-right_wrapper-body">
                            <div className="process-card_content">
                                <h2>Strategic Analysis</h2>
                                <span>
                                Uncover opportunities with in-depth business evaluations and market insights. 
                                We craft custom strategies to align with your vision and goals, setting the foundation for success.
                        </span>
                        <button className="read-more-btn" onClick={() => window.location.href = '/contact'}>Contact Us</button>
                                
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
                                <h2>Tailored Planning</h2>
                                <span>
                                Turn ideas into actionable plans with our product-focused roadmaps. 
                                From concept to execution, we ensure every detail aligns with your objectives and market demands.
                        </span>
                        <button className="read-more-btn" onClick={() => window.location.href = '/contact'}>Contact Us</button>
                                
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
                                <h2>Sustained Growth</h2>
                                <span>
                                Ensure long-term success with our dedicated support and maintenance.
                                 We help optimize performance, address challenges, and adapt to evolving needs.
                        </span>
                               
                                <button className="read-more-btn" onClick={() => window.location.href = '/contact'}>Contact Us</button>
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
                                <h2>Seamless Delivery</h2>
                                <span>
                                Bring your vision to life with our streamlined delivery process. We focus on quality, 
                                efficiency, and precision to ensure your product exceeds expectations.
                        </span>
                        <button className="read-more-btn" onClick={() => window.location.href = '/contact'}>Contact Us</button>
                                
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