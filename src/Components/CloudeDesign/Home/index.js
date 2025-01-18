import React from 'react';
import Banner from "./Banner";
import Summary from "./Summary";
import WhatWeDo from "./WhatWeDo";
import Process from "./Process";
import OurProjects from "./OurProjects";
import Concept from "./Concept";


const Home = () => {

    return (<>
            <Banner></Banner>
            <Summary gradientHeader={"ELEVATING"}
                     defaultHeader={"BRANDS THROUGH DESIGN, MARKETING, & TECHNOLOGY"}
                     content="We specialize in design, marketing, and technology to help business grow & thrive.
                     Our innovative solutions bridge creativity and strategy for impactful results."
                     button={"About CloudeDesign"}
                     buttonLink={"/about"}
                     sectionImage={"/cloudedesign/robot.png"}></Summary>
            <WhatWeDo></WhatWeDo>
            <Process></Process>
            <OurProjects></OurProjects>
            <Concept></Concept>
        </>
    )
}
export default Home;