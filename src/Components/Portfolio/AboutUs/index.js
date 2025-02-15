
import React from "react";
import './about-us.css';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <h1 style={{marginBottom:0}}>About Us</h1>
            <h2 style={{marginTop:0}}>Bringing birds to life through art</h2>
            <div className="about-us-content-container">
                <div>
                    <img src="/portfolio/04.png" alt="bird-01" width={"100%"}/>
                    <div>
                        <span className="description">Lorem ipsum odor amet, consectetuer adipiscing elit. Ridiculus neque
                            turpis, phasellus varius facilisis praesent penatibus tortor? Etiam malesuada venenatis
                            torquent
                            volutpat orci id egestas duis orci. Cras ridiculus varius vivamus hendrerit senectus iaculis
                            sagittis. Aptent venenatis netus pulvinar nam augue vivamus. Feugiat congue conubia torquent
                            tempor tellus primis! Tempus a sapien integer nullam class vitae rhoncus pretium.</span>
                        <span>Magnis enim risus vitae sociosqu massa quisque dapibus. Dignissim nisi diam viverra fermentum </span>
                    </div>
                </div>
                <div>
                    <p className="description">Lorem ipsum odor amet, consectetuer adipiscing elit. Ridiculus neque
                        turpis, phasellus varius facilisis praesent penatibus tortor? Etiam malesuada venenatis
                        torquent
                        volutpat orci id egestas duis orci. Cras ridiculus varius vivamus hendrerit senectus iaculis
                        sagittis. Aptent venenatis netus pulvinar nam augue vivamus. Feugiat congue conubia torquent
                        tempor tellus primis! Tempus a sapien integer nullam class vitae rhoncus pretium.</p>
                    <img src="/portfolio/05.png" alt="bird-02" width={"100%"}/>
                </div>
            </div>
            <div className="hr-line"></div>
        </div>
    )
}
export default AboutUs;