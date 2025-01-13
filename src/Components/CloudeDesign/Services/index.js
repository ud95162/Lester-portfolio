import ServiceBanner from "./Banner";
import SectionSummary from "../SectionSummary";
import WhatWeDo from "../Home/WhatWeDo";
import React from "react";
import WordPressPartner from "../WordPressPartner";
import Concept from "../Home/Concept";
import Service from "./Service";

const Services = () => {
    const summarySectionContent = [
        {
            content: "At our core, we believe that every business is unique, and so are its challenges. " +
                "That's why we specialize in creating bespoke software solutions designed to meet " +
                "the specific needs of your brand. As a leading software development company in Sri Lanka, " +
                "we're committed to delivering innovative, sustainable, " +
                "and practical solutions to help your business thrive in today's fast-paced digital world."
        },
        {
            content: "Many businesses underestimate the power of customized software," +
                " leaving them unable to tackle modern challenges effectively. We're here to change that." +
                " Whether you're a start-up or a multinational corporation," +
                " our team takes the time to understand your industry and identify the areas" +
                " where the right software can make the biggest impact."
        },
        {
            content: "From streamlining operations to achieving key objectives," +
                " we craft software that's not only functional but also aligns perfectly with your goals." +
                " Our process is simple yet effective-driven by strategy, innovation, and a focus on delivering real results.\n" +
                "Let us partner with you to create software that transforms the way you do business. " +
                "Explore how our expertise can help you overcome challenges and unlock new opportunities." +
                " Your success is our priority!"
        }
    ]
    return (
        <>
            <ServiceBanner
                backgroundImage="/cloudedesign/service-banner.jpg"
                defaultHeader="SOFTWARE SOLUTIONS"
                gradientHeader="TAILORED FOR YOU."

            />
            <SectionSummary
                breadcrumb="OUR SERVICES"
                gradientHeader="CUSTOMIZED"
                defaultHeader="SOFTWARE SOLUTIONS TAILORED TO YOUR BUSINESS"
                sectionImage="/cloudedesign/service-robot.png"
                content={summarySectionContent}
            />
            <WhatWeDo></WhatWeDo>
            <WordPressPartner/>
            <Service/>
            <Concept></Concept>
        </>
    )
}

export default Services;