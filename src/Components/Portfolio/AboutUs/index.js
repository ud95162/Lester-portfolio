
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
                        <span className="description">At NatBound, we celebrate the beauty of the natural world through intricate and expressive artwork. Each black-and-white illustration captures the essence of wildlife, highlighting the delicate balance between flora and fauna. Inspired by the rich biodiversity of our planet, our art invites you to connect with nature on a deeper level, appreciating its textures, contrasts, and untamed spirit.

Explore our collection and experience nature’s timeless elegance through every brushstroke and detail.</span>
                        <span>Magnis enim risus vitae sociosqu massa quisque dapibus. Dignissim nisi diam viverra fermentum </span>
                    </div>
                </div>
                <div>
                    <p className="description">We recognize the hallmark of a good business model by being friendly, honest and being absolutely direct.
                        We at Natbound   strictly adhere to ethics of animal welfare and conservation. The elements such as budget, transport, accommodation,
                        friendly courteous service and with utmost knowledge of the targeted subjects must run parallel to each other.
                        The “armamentarium” of Natbound is enormous with partners of over two decades of experience, in many regions where we operate.
                        It is all about our experience, which enables us to furnish an incredibly joyous and fruitful itinerary. </p>
                    <img src="/portfolio/05.png" alt="bird-02" width={"100%"}/>
                </div>
            </div>
            <div className="hr-line"></div>
        </div>
    )
}
export default AboutUs;