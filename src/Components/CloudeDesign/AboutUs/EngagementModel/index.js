import '../CoreValues/corevalues.css'
import ContentOnLeft from "../../Services/ContentOnLeft";
import ContentOnRight from "../../Services/ContentOnRight";
import React from "react";

const EngagementModel = () => {
    return (
        <>
            <div className="valueContainer">
                <div className="valueHeader">
                    <h1>
                        <span className="valueHeaderSpan">
                            OUR ENGAGEMENT
                            </span>
                        &nbsp; MODELS
                    </h1>


                </div>
                <div className="valueContent">
                    <ContentOnLeft contentImage={"./cloudedesign/aboutus/Fixed-Time-and-Price.png"}
                                   subTitle="Fixed Time and Price"
                                   content="With this model, we work closely with you to define clear
                                    deliverables and timelines. Together, we set a fixed price for the project,
                                     so you know exactly what to expect from start to finish.">
                    </ContentOnLeft>
                    <ContentOnLeft contentImage={"./cloudedesign/aboutus/Time-and-Material.png"}
                                   subTitle="Time and Material"
                                   content="Ideal for complex or evolving projects,
                                    our time & material model provides flexibility.
                                     This approach allows for adjustments in specifications and design,
                                      ensuring we meet your needs as they evolve.">
                    </ContentOnLeft>
                    <ContentOnRight
                        contentImage={"./cloudedesign/aboutus/Milestone-Billing.png"}
                        subTitle="Milestone Billing"
                        content="For long-term projects, milestone billing keeps everything on track.
                         We divide the project into measurable phases,
                          giving you visibility into progress and reducing risks along the way."
                    />
                    <ContentOnRight
                        contentImage={"./cloudedesign/aboutus/Dedicated-Resource.png"}
                        subTitle="Dedicated Resource"
                        content="If you need ongoing support, our dedicated resource model provides
                         you with a specialized team working exclusively on your project.
                         This team can implement customized quality and process frameworks directly at your end."
                    />


                </div>

            </div>

        </>
    )
}

export default EngagementModel;