import ServiceBanner from "../Services/Banner";
import Summary from "../Home/Summary";
import React from "react";
import VisionAndMission from "./VisionAndMission";
import WordPressPartner from "../WordPressPartner";
import CoreValues from "./CoreValues";
import EngagementModel from "./EngagementModel";
import Concept from "../Home/Concept";

const AboutUs = () => {
    return (
        <>
            <ServiceBanner
                backgroundImage="/cloudedesign/about-us-banner.png"
                defaultHeader="BUILDING DIGITAL DREAMS"
                gradientHeader="ONE LIFE OF CODE AT A TIME."
            />
            <Summary
                breadcrumb="ABOUT US"
                gradientHeader="YOUR PARTNER"
                defaultHeader="IN DIGITAL INNOVATION"
                sectionImage="/cloudedesign/aboutus/robot.png"
                content={"We create responsive, user-freindly websites to elevate your online presence. Empowering business with innovative digital experiences."}
                button={"Contact Us"}
            />
            <VisionAndMission/>
            <WordPressPartner/>
            <CoreValues/>
            <EngagementModel/>
            <Concept/>

        </>
    )
}

export default AboutUs;