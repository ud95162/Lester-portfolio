import './contentonleft.css';
import React from "react";

const ContentOnLeft = ({title, subTitle, content, backgroundImage, textColor}) => {
    return (
        <>
            <div className="do_description__left-content-card"
                 style={{
                     backgroundImage: `url(${backgroundImage})`,
                     backgroundSize: "cover",
                     backgroundPosition: "center",
                     backgroundRepeat: "no-repeat",
                 }}>
                <div className="do_description__left-content-card__content">
                    <h1 style={{margin: 0, color: textColor}}>{title}</h1>
                    <h2 style={{marginTop: 0, color: textColor}}>{subTitle}</h2>

                    <div style={{width: "50%"}}>
                            <span style={{color: textColor}}>{content}</span>
                    </div>

                    <button className='summary_about-btn' style={{cursor: "pointer", marginTop: "20px"}}>
                        Read More
                    </button>
                </div>

            </div>
        </>
    )
}

export default ContentOnLeft;