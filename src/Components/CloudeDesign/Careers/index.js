import ServiceBanner from "../Services/Banner";
import SectionSummary from "../SectionSummary";
import React from "react";
import Summary from "../Home/Summary";
import Concept from "../Home/Concept";
import Service from "../Services/Service";
import ExploreExpandInnovative from "./ExploreExpandInnovative";
import CareerSummary from "./CareerSummary";

const Careers = () =>  {

    return (
        <>
            <ServiceBanner
                backgroundImage="/cloudedesign/careers-banner.png"
                defaultHeader="WHERE PASSION MEETS PURPOSE"
                gradientHeader="JOIN US TODAY!"
            />

            <div style={{display: 'flex', justifyContent: 'center', paddingTop: "2rem"}}>
                <span>HOME&nbsp;</span>
                <img src="/cloudedesign/icons/right-simple-arrow.svg" alt="arrow" style={{width: '12px'}}/>
                <span> &nbsp;WORK WITH US</span>
            </div>

            <ExploreExpandInnovative/>

            <Service/>

            <Concept/>

            <CareerSummary/>

        </>
    )
}

export default Careers;