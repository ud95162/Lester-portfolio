
import './service.css'
import React from "react";
import ContentOnLeft from "../ContentOnLeft";
import ContentOnRight from "../ContentOnRight";
const Services = () => {
    return (

        <div className="serviceContainer">
            <div className="serviceHeader">
                <h1>
                        <span className="serviceHeaderSpan">
                            SMALL BUSINESS
                            </span>
                    &nbsp; BRANDING, WEB DESIGN, AND MARKETING
                </h1>


            </div>
            <div className="serviceContent">
                <ContentOnLeft contentImage={"./cloudedesign/services/Logo-Design.png"}
                               subTitle="Logo Design"
                               content="Crafting a unique and distinctive logo that embodies  the core values and personality of your business, while crafting alasting impression."
                               buttonText="Read More">
                </ContentOnLeft>
                <ContentOnLeft contentImage={"./cloudedesign/services/Web-Design.png"}
                               subTitle="Web Design"
                               content="Developing user-friendly, asentically pleasing  websites  optimized for SEO, provding and enaging online experience for your visitors."
                               buttonText="Read More">
                </ContentOnLeft>
                <ContentOnRight
                    contentImage={"./cloudedesign/services/Branding.png"}
                                subTitle="Branding"
                                content="Building powerful brand indetites that form a deep connection with your target audience and  differentiate you in the  marketplace"
                                buttonText="Read More"
                                >
                </ContentOnRight>
                <ContentOnRight
                    contentImage={"./cloudedesign/services/Graphic-Design.png"}
                                subTitle="Graphic Design"
                                content="Creating visually striking designs that captive and communicate your message effectively, to enhance  your brand's visual appeal. "
                                buttonText="Read More"
                                >
                </ContentOnRight>
                <ContentOnLeft
                    contentImage={"./cloudedesign/services/Social-Media.png"}
                    subTitle="Social Media"
                    content="Implemting dynamic social media stategies that elevate your online presence, engage your audience, and boost your brand's digital footprint."
                    buttonText="Read More"
                >
                </ContentOnLeft>
                <ContentOnLeft
                    contentImage={"./cloudedesign/services/Marketing.png"}
                    subTitle="Marketing"
                    content="Delivering Innovative  marketing solutions that drive growth, increase brand awarness, and generate meaningful connections with your cutomers"
                    buttonText="Read More">
                </ContentOnLeft>

            </div>

        </div>
    )
}

export default Services;