
import React from 'react';
import './banner.css';
import Header from "../Header";

const Banner = () => {
    return (
        <div className={"banner"}>
            <div style={{backgroundImage:'url(/portfolio/Banner-Img.png)'}} className="banner-bg-container" >
                <Header/>
            </div>
            <div className="banner-container" style={{backgroundImage:'url(/portfolio/bird.png)'}} >
                <div></div>
                <div className="banner-description">
                    <h3>"With a keen eye on the skies and a steady hand on the canvas,
                        I capture the beauty, grace,
                        and spirit of birds-bringing their fleeting moments to life through art,
                        where every feather tells a story and every stroke echoes the wonders of nature."</h3>
                </div>
            </div>
        </div>
    )
}
export default Banner;