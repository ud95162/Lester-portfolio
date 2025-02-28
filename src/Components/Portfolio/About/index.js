import React from "react";
import './about.css'

const About = () => {
    return(
        <div className="about-container">
            <div className="about-content" style={{backgroundImage: 'url(/portfolio/img01.png)'}}>
                <div className="about-description">
                    <h1 style={{margin: 0}}>Lester Perera</h1>
                    <h2 style={{marginTop: 0}}>Birder and Bird Artist</h2>
                    <span className="description">Lester’s dedicated professional tour leading experience
                        in Sri Lanka and India for over two and a half decades has encouraged him to create a
                        broader and wider spectrum of wildlife tours in south Asia. His acumen in Birding and
                        wildlife tourism is widely respected in Sri Lanka and India as well. Our portfolio of
                        itineraries encapsulates the whole Indian subcontinent. We hope to expose more regions
                        in our product profile in the future.

 </span>
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