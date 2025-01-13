import ServiceBanner from "../Services/Banner";
import SectionSummary from "../SectionSummary";
import React from "react";
import Summary from "../Home/Summary";
import Concept from "../Home/Concept";
import Service from "../Services/Service";
import ExploreExpandInnovative from "./ExploreExpandInnovative";

const Careers = () =>  {

    return (
        <>
            <ServiceBanner
                backgroundImage="/cloudedesign/careers-banner.png"
                defaultHeader="WHERE PASSION MEETS PURPOSE"
                gradientHeader="JOIN US TODAY!"
            />
            <Summary
                breadcrumb="WORK WITH US"
                gradientHeader="INNOVATIVE, INSPIRE, IMPACT"
                defaultHeader="JOIN OUR TEAM!"
                sectionImage="/cloudedesign/workwithus/robot.png"
                content={"Our integrated calendar feature transforms your tasks and events into a dynamic to-do list, helping you manage your time more efficiently"}
                button={"See Job Details"}
            />

            <ExploreExpandInnovative/>

            <Service/>

            <Concept/>

        </>
    )
}

export default Careers;