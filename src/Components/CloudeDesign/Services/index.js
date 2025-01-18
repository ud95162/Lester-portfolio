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
            content: "We design and deliver custom software solutions using React and Next.js, ensuring innovation," + 
            "scalability, and efficiency. With a focus on industry best practices, we help businesses in Sri Lanka and beyond thrive in today’s digital world." +
             "Every business is unique, and so are its challenges. Our team takes the time to understand your goals, " +
            "crafting tailored solutions that optimize operations, achieve objectives, and unlock new opportunities. " +
            "By leveraging modern technologies, we ensure your software is secure, sustainable, and future-ready. " +
           "Whether you're a startup or an established corporation, our expertise transforms challenges into growth" + 
           "opportunities. Let’s build software that drives your business forward and sets you apart in a competitive landscape. Your success is our mission! " 
                
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
                defaultHeader="SOLUTIONS WITH React & Nextjs"
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