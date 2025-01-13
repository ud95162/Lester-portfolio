import './wordpresspartner.css';
import React from "react";

const WordPressPartner = () => {
    return (
        <>
            <div className="wordpress_wrapper">
                <div className="wordpress-container"
                    style={{
                        backgroundImage: `url('/cloudedesign/wordpress.png')`
                    }}
                >
                    <div></div>
                    <div className="wordpress_content">
                        <h1 style={{margin: "0", color: "white"}}>

                            <span  className="default-header" style={{
                                color:"white",
                                fontWeight: "600",
                            }}>
                                 YOUR TRUSTED
                            </span>
                            <span className="default-header"
                                style={{
                                    background: "linear-gradient(to right, #ebb500, #ec5b12)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    fontWeight: "600",
                                }}>
                                <span  className="default-header" style={{
                                    color:"white",
                                    fontWeight: "600",
                                }}> WORDPRESS </span>
                            </span>
                        </h1>
                        <h1 style={{margin: "0", color: "white"}} className="header-gap">
                          <span  className="default-header" style={{
                            color:"white",
                            fontWeight: "600",
                          }}>WEBSITE DESIGN PARTNER</span></h1>
                        <div className="gap">
                            <span className="description">
                                At Cloud-e-Design, we're passionate about helping small businesses succeed online.
                                Our team of WordPress experts creates custom websites that not only look great,
                                but are also search engine-friendly and fully optimized to boost your online visibility.
                                We make the process simple and stress-free.
                                From building your site to ongoing maintenance and support, we've got you covered.
                                Take a look at our portfolio to see what we've done for other businesses like yours.
                                Curious about how we can bring your vision to life?
                                Let us create a free mockup for you and show you why so many clients love working with us!
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default WordPressPartner;