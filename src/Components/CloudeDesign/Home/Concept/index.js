import './concept.css';
import React from "react";
import ConceptCard from "./ConceptCard";

const Concept = () => {
    return (
        <>
            <div className="concept_container">
                <div className="concept_header">
                    <h3 style={{margin: 0}}>Vision to Reality</h3>
                    <h1 style={{marginTop: "10px"}}>
                        FROM CONCEPT TO
                        <span
                            style={{
                                background: "linear-gradient(to right, #9d1cd0, #6519d1)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                fontWeight: "600",
                                fontSize: "48px",
                            }}> SUCCESS
                            </span>
                    </h1>
                    <span style={{width: "80%", fontSize : "14px"}}>At CloudeDesign, we use a flexible approach to deliver scalable,
                    secure, & cost-effective software. We turn ideas into impactful,
                    market-ready solutions tailored to your needs.</span>
                </div>

                <div className="concept_body">
                    <ConceptCard title="Ideation"
                                 image="/cloudedesign/icons/ideation.svg"
                                 description="We work with clients to refine ideas into products that meet
                        their goals, vision, & ROI targets."></ConceptCard>
                    <ConceptCard title="Planning"
                                 image="/cloudedesign/icons/planning.svg"
                                 description="We design a framework with key functions, KPIs, costs, and risk management
                                 for successful delivery."></ConceptCard>
                    <ConceptCard title="Design"
                                 image="/cloudedesign/icons/design.svg"
                                 description="Our design process selectes the best tech stack and UI/UX design to create
                                 a robust, user-freindly product."></ConceptCard>
                    <ConceptCard title="Prototype"
                                 image="/cloudedesign/icons/prototype.svg"
                                 description="We create a prototype to bring the concept to life,
                                 enabling feedback & adjustments before development."></ConceptCard>

                </div>

            </div>
        </>
    )
}

export default Concept;