import React from 'react';
import Banner from "../Banner";
import About from "../About";
import Why from "../Why";
import Portfolio from "../Portfolio";
import AboutUs from "../AboutUs";
import Logo from "../Logo";



const Home = () => {

    return (<>
            <div id="banner-section">
                <Banner/>
            </div>
            <div id="about-section">
                <About/>
            </div>
            <div id="why-section">
                <Why/>
            </div>
            <div id="portfolio-section">
                <Portfolio/>
            </div>
            <div id="aboutus-section">
                <AboutUs/>
            </div>
            <Logo/>
        </>
    )
}
export default Home;