import React from "react";
import './about.css'

const About = () => {
    return(
        <div className="about-container">
            <div className="about-content" style={{backgroundImage: 'url(/portfolio/img01.png)'}}>
                <div className="about-description">
                    <h1 style={{margin: 0}}>Lester Perera</h1>
                    <h2 style={{marginTop: 0}}>Birder and Bird Artist</h2>
                    <span className="description">Lorem ipsum odor amet, consectetuer adipiscing elit. Ridiculus neque turpis, phasellus varius facilisis praesent penatibus tortor? Etiam malesuada venenatis torquent volutpat orci id egestas duis orci. Cras ridiculus varius vivamus hendrerit senectus iaculis sagittis. Aptent venenatis netus pulvinar nam augue vivamus. Feugiat congue conubia torquent tempor tellus primis! Tempus a sapien integer nullam class vitae rhoncus pretium.</span>
                    <span>Magnis enim risus vitae sociosqu massa quisque dapibus. Dignissim nisi diam viverra fermentum </span>
                    <div>
                        <img src='/portfolio/sign.png' alt="Lester-sign" className={"img-sign"}/>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default About;