import './conceptcard.css';
import React from "react";

const ConceptCard = ({image, title, description}) => {
    return (
        <>
            <div className="concept_body-card">
                <img src={image} alt="ideation" style={{width: "60px"}}/>
                <h2 style={{margin: "12px"}}>{title}</h2>
                <span style={{fontSize: "12px"}}>{description}</span>
            </div>
        </>
    )
}

export default ConceptCard;