import './summary.css';
import React from "react";


const Summary = ({breadcrumb,gradientHeader,defaultHeader,content,button,sectionImage}) => {
    return(
        <>
            {breadcrumb ? <div style={{display: 'flex', justifyContent: 'center', paddingTop: "2rem"}}>
                <span>HOME&nbsp;</span>
                <img src="/cloudedesign/icons/right-simple-arrow.svg" alt="arrow" style={{width: '12px'}}/>
                <span> &nbsp;{breadcrumb}</span>
            </div>:""}

            <div className="summary_wrapper">
                <div className="summary_body">
                    <div className="summery-main">
                        <h1>
                        <span className="summery-header-span">
                                {gradientHeader}
                            </span>
                            &nbsp;{defaultHeader}
                        </h1>

                        <div className="summery-description">
                        <span>{content}</span>
                        </div>

                        { button ?
                        <button className='summary_about-btn' style={{cursor: "pointer"}}>
                            {button}
                        </button> : ""}
                    </div>
                    <div className='summer-img'>
                        <img src={sectionImage} alt="robot"/>
                    </div>
                </div>

                <hr style={{
                    marginTop: "50px",
                    border: "none", /* Removes the default border */
                    height: "2px", /* Set the thickness of the line */
                    backgroundColor: "#cdcecf" /* Set your desired color */
                }}/>
            </div>

        </>
    )
}

export default Summary;