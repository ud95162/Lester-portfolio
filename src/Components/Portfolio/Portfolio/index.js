import React from 'react';
import './portfolio.css'

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="portfolio-container">
                <h1 style={{marginBottom:0}}>Portfolio</h1>
                <h2 style={{marginTop:0}}>A visual Journey or Art ana Passion.</h2>
                <p className="portfolio-description">Immerse yourself in a visual journey where art meets passion.
                    Each piece reflects a deep connection with nature, capturing its raw beauty, intricate details,
                    and vibrant energy. From the serene presence of wildlife to the rich textures of lush landscapes,
                    every artwork tells a unique story.</p>
                <div className="portfolio-img-container">
                    <div>
                        <img src='/portfolio/01.png' alt="image1" className="image01"/>
                    </div>
                    <div>
                        <img src='/portfolio/02.png'  alt="image02" className="image02"/>
                    </div>
                    <div>
                        <img src='/portfolio/03.png' alt="image03" className="image01"/>
                    </div>
                </div>
                <div className="portfolio-footer">
                    <div className="line"></div>
                    <div>
                        <img src='/portfolio/arrow-circle.svg' alt="left-arrow" className="arrow"  style={{transform: 'rotate(-180deg)',opacity:0.5}} />
                        <img src='/portfolio/arrow-circle.svg' alt="right-arrow"  className="arrow" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Portfolio;