import './contentonleft.css';
import React from "react";

const ContentOnLeft = ({title, subTitle, content, backgroundImage, textColor,contentImage, buttonText}) => {
    console.log(buttonText);
    return (
        <>
            <div className="service__left-content-card"
                 style={{
                     backgroundSize: "cover",
                     backgroundColor:"#f5f4f6",
                     backgroundPosition: "center",
                     backgroundRepeat: "no-repeat",
                 }}>
                <div className="service__left-content-card__content">
                    <h2 style={{marginTop: 0, color: textColor}}>{subTitle}</h2>

                    <div >
                            <span style={{color: textColor}}>{content}</span>
                    </div>

                    {/* Render button only if buttonText is defined */}
                    {buttonText && (
                        <button className="summary_about-btn" style={{ cursor: "pointer", marginTop: "20px" }}>
                            {buttonText}
                        </button>
                    )}
                </div>
                {contentImage?
                    <div>
                        <img src={contentImage} alt={contentImage} width={"100%"}/>
                    </div>
                    : <div></div>}

            </div>
        </>
    )
}

export default ContentOnLeft;