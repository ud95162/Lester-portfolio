
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
                        <p className="why-description" >Lorem ipsum odor amet,
                            consectetuer adipiscing elit. Ridiculus neque
                            turpis, phasellus varius facilisis praesent penatibus tortor? Etiam malesuada venenatis
                            torquent volutpat orci id egestas duis orci. Cras ridiculus varius vivamus hendrerit
                            senectus iaculis sagittis. Aptent venenatis netus pulvinar nam augue vivamus. Feugiat congue
                            conubia torquent tempor tellus primis! Tempus a sapien integer nullam class vitae rhoncus
                            pretium.
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