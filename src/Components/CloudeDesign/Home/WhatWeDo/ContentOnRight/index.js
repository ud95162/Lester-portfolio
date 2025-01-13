import './contentonright.css';
import React from "react";

const ContentOnRight = ({ title, subTitle, content, backgroundImage, textColor }) => {
    return (
        <>
            <div
                className="do_description__right-content-card"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="do_description__right-content-card__body">
                   <div></div>
                    <div className="do_description__right-content-card__content">
                        <h1 style={{color: textColor, margin: 0}}>{title}</h1>
                        <h2 style={{color: textColor, marginTop: 0}}>{subTitle}</h2>

                        <div>
                            <span style={{color: textColor}}>{content}</span>
                        </div>

                        <button
                            className="summary_about-btn"
                            style={{cursor: "pointer", marginTop: "20px"}}
                        >
                            Read More
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ContentOnRight;
