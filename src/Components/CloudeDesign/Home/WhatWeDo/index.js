import './whatwedo.css';
import React from "react";
import ContentOnLeft from "./ContentOnLeft";
import ContentOnRight from "./ContentOnRight";

const WhatWeDo = () => {
    return (
        <>
            <div className="do_wrapper">
                <div className="do_body">
                    <div className="do_description-card">
                        <h3 style={{margin: 0}}>What We Do</h3>
                        <h1 style={{marginTop: "10px"}}>
                            EXPERT SERVICES FOR YOUR BUSINESS&nbsp;
                            <span
                                style={{
                                    background: "linear-gradient(to right, #9d1cd0, #6519d1)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    fontWeight: "600",
                                    fontSize: "48px",
                                }}> GROWTH
                            </span>
                        </h1>
                        <span style={{marginTop: "10px"}}>
                            We deliver design, marketing, and technology to grow your business. Focused on innovations, we help turn ideas into success.
                        </span>
                    </div>

                    <ContentOnLeft backgroundImage="'./cloudedesign/ourservices/custom-web-bg.png'"
                                   title="Custom"
                                   subTitle="Web App Development"
                                   content="Unlock powerful web solutions tailored to your needs with our expert custom web app development services.">
                    </ContentOnLeft>

                    <ContentOnLeft backgroundImage="'./cloudedesign/ourservices/wordpress-dev-bg.png'"
                                   subTitle="Wordpress Development"
                                   content="Transform your ideas into a dynamic, fully customizable Wordpress site built to enhance your online presence.">
                    </ContentOnLeft>

                    <ContentOnRight backgroundImage="'./cloudedesign/ourservices/e-com-dev-bg.png'"
                                    subTitle="E-Commerce Development"
                                    content="Boost your eCommerce platform with custom integrations, automation, and personalized features for optimized performace."
                                    textColor="white">
                    </ContentOnRight>

                    <ContentOnLeft backgroundImage="'./cloudedesign/ourservices/process-automate-bg.png'"
                                   subTitle="Business Process Automation"
                                   content="Streamline daily tasks with automated solutions crafted to make your business more effiecient and prodctive"
                                   textColor="white">
                    </ContentOnLeft>

                    <ContentOnLeft backgroundImage="'./cloudedesign/ourservices/business-portals-bg.png'"
                                   subTitle="Custom Business Portals"
                                   content="Build a custom portal designed to meet your unique business requirements & goals."
                                   textColor="white">
                    </ContentOnLeft>


                    <ContentOnRight backgroundImage="'./cloudedesign/ourservices/consultancy-bg.png'"
                                    subTitle="Consultance & Discovery"
                                    content="Gain valuable insights & strategic guidance to help your business adopt the right technologies & make impactful decisions.">
                    </ContentOnRight>


                    <ContentOnLeft backgroundImage="'./cloudedesign/ourservices/maintenance-bg.png'"
                                   subTitle="Maintenance & Supports"
                                   content="Count on our reliable maintenance & support to keep your business software running smoothly for long-term success."
                                   textColor="white">
                    </ContentOnLeft>


                </div>
            </div>
        </>
    )
}

export default WhatWeDo;