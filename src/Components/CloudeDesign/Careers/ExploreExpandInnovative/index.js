import './exploreexpandinnovative.css';
import React from "react";

const ExploreExpandInnovative = () => {
    return (
        <>
            <div className="explore_container">
                {/*explore section*/}
                <div style={{
                    backgroundImage: `url('./cloudedesign/workwithus/Explore.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }} className="expolre-content">
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <div className="explore-title">
                            <h1 className="explore-title-text">
                                Explore.
                            </h1>
                        </div>

                        <div className="explore-content">
                        <span className="explore-description">
                            Your brand isn't just a name, its an experience. We explore design to shape the way
                            people experience your brand, and influence what its stand for in the hearts and
                            minds of customers.
                        </span>
                        </div>
                    </div>
                </div>

                {/*expand section*/}
                <div style={{
                    backgroundImage: `url('./cloudedesign/workwithus/Expand.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }} className="expolre-content">
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <div className="expand-title">
                            <h1 className="expand-title-text">
                                Expand.
                            </h1>
                        </div>

                        <div className="expand-content">
                            <span className="explore-description">
                            We help your brand expand by creating innovative strategies that open doors to new opportunities. 
                            From scaling your business to reaching untapped audiences, 
                            we’re here to empower your vision and turn possibilities into reality.
                            </span>
                        </div>
                    </div>
                </div>

                {/*experience section*/}
                <div style={{
                    backgroundImage: `url('./cloudedesign/workwithus/Experence.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    position: "relative",
                }} className="expolre-content">
                    <div>
                        <div className="experience-connect">
                            <span className="experience-description">
                            We create experiences that captivate and inspire, 
                            leaving lasting impressions on your audience. By blending creativity and strategy, 
                            we craft immersive experiences that connect emotionally, reinforce loyalty, and elevate your brand to new heights.
                            </span>
                            {/*<button className='summary_about-btn' style={{cursor: "pointer", position: "absolute", right: "0"}}>*/}
                            {/*    Contact Us*/}
                            {/*</button>*/}
                        </div>
                        <div className="experience-title">
                            <h1 className="experience-title-text">
                            Experience.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExploreExpandInnovative;