import './contentonright.css';
import React from "react";

const ContentOnRight = ({ title, subTitle, content, backgroundImage, textColor, contentImage, buttonText }) => {
    return (
        <>
            <div
                className="service__right-content-card"
                style={{
                    backgroundSize: "cover",
                    backgroundColor:"#f5f4f6",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="service__right-content-card__body">
                    <img src={contentImage} alt={contentImage} width={"100%"}/>
                    <div className="service__right-content-card__content">
                        <h1 style={{color: textColor, margin: 0}}>{title}</h1>
                        <h2 style={{color: textColor, marginTop: 0}}>{subTitle}</h2>

                        <div>
                            <span style={{color: textColor}}>{content}</span>
                        </div>

                        {/* Render button only if buttonText is defined */}
                        {buttonText && (
                            <button className="summary_about-btn" style={{ cursor: "pointer", marginTop: "20px" }}>
                                {buttonText}
                            </button>
                        )}
                    </div>
                </div>

            </div>
        </>
    );
};

export default ContentOnRight;
