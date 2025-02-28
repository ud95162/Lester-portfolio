
import React from "react";

import './why.css'
const Why = () => {
    return (
        <div className="why">
            <div className="why-container">
                <div className="why-content">
                    <div className="why-img">
                        <img src="/portfolio/img02.png" alt="lester-image" />
                    </div>
                    <div className="why-description">
                        <img src={"/portfolio/nat-copy.png"} alt="natbound" className="nat-image"/>
                        <h1 className="why-header">Why Natbound</h1>
                        <h2 className="why-sub-header">Experience, Ethics, & Exploration in Wildlife Tourism</h2>
                        <p className="why-description" >Natbound’s experience spans over two decades in Sri Lanka and
                            India inclusive of the Andaman Islands as well. The familiarity with all critters to the
                            larger forms are, our forte. From Ladhak in the north of India to the southern tip of Sri Lanka
                            and from Gujarat in the west to Tinsukia in Assam in the east, is within the frame work of our product profile.
                            Our explorations into other parts of the subcontinent isn’t over with, it is the enthusiasm we have within that creates the drive and to further provide our clientele with the best experience.
                        </p>
                        <div className="button-container" >
                            <button >Make an Appointment</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Why;