import './sectionsummary.css';
import React from "react";

const SectionSummary = ({breadcrumb, gradientHeader, defaultHeader, content, sectionImage}) => {
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'center', paddingTop: "2rem"}}>
                <span>HOME&nbsp;</span>
                <img src="/cloudedesign/icons/right-simple-arrow.svg" alt="arrow" style={{width: '12px'}}/>
                <span> &nbsp;{breadcrumb}</span>
            </div>
            <div className="section-summary_wrapper">
                <div className="section-summary_body">
                    <div className="section-summery-main">
                        <h1>
                        <span className="section-summery-header-span">
                                {gradientHeader}
                            </span>
                            &nbsp;{defaultHeader}
                        </h1>

                        <div className="section-summery-description">
                            {content.map((item, index) => (
                                <span className="section-summery-content_description">{item.content}
                            </span>
                            ))}


                        </div>


                    </div>
                    <div className='section-summer-img'>
                        <img src={sectionImage} alt="robot" className="section-summery-content"/>
                    </div>
                </div>

                <hr style={{
                    margin: "50px 100px 0 50px",
                    border: "none", /* Removes the default border */
                    height: "2px", /* Set the thickness of the line */
                    backgroundColor: "#cdcecf" /* Set your desired color */
                }}/>
            </div>
        </>
    )
}

export default SectionSummary;