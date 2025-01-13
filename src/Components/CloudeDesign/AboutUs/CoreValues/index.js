import ContentOnLeft from "../../Services/ContentOnLeft";
import ContentOnRight from "../../Services/ContentOnRight";
import React from "react";
import './corevalues.css';

const CoreValues = props => {
    return (
        <>
            <div className="valueContainer">
                <div className="valueHeader">
                    <h1>
                        <span className="valueHeaderSpan">
                            ONE FOUNDATION, YOUR INSPIRATION.
                            </span>
                        &nbsp; CORE VALUES
                    </h1>


                </div>
                <div className="valueContent">
                    <ContentOnLeft contentImage={"./cloudedesign/aboutus/Unified.png"}
                                   subTitle="Unified"
                                   content="We operate as one-aligned in vision, execution, and outcomes.
                                    As a leader in software development, we create advanced,
                                     tallor-made solutions that enable businesses to thrive in the digital world.">
                    </ContentOnLeft>
                    <ContentOnLeft contentImage={"./cloudedesign/aboutus/Confident.png"}
                                   subTitle="Confident"
                                   content="Confidence fuels our approach.
                                    Every project we undertake-from custom wetaf-pplications to automation
                                     solutions-reflects our commitment to delivering rellable,
                                      innovative, and impactful results that help businesses grow and excel.">
                    </ContentOnLeft>
                    <ContentOnRight
                        contentImage={"./cloudedesign/aboutus/Reliable.png"}
                        subTitle="Reliable"
                        content="Rellability is the cornerstone of our work. At
                        Unified Infotech, we provide dependable,
                        end-to-end digital transformation solutions,
                        including e-commerce platforms and custom business portals,
                         to ensure resillence and growth in a fast-changing world."
                    />
                    <ContentOnRight
                        contentImage={"./cloudedesign/aboutus/Transformative.png"}
                        subTitle="Transformative"
                        content="Our commitment to transformation drives us.
                        Through pioneering software solutions, Unified
                        Infotech empowers businesses to achiove remarkable growth,
                         innovato, and lead in an ovolving digital landscape."
                    />


                </div>

            </div>

        </>
    )
}

export default CoreValues;