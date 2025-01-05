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
            <Summary></Summary>
            <WhatWeDo></WhatWeDo>
            <Process></Process>
            <OurProjects></OurProjects>
            <Concept></Concept>
        </>
    )
}
export default Home;