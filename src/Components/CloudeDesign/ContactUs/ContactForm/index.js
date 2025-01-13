import './contactform.css';
import React from "react";

const ContactForm = () => {
    return (
        <>
            <div className="contact-form_wrapper">
                <div className="contact-details">
                    <h1 style={{marginTop: 0}}>WAYS TO CONNECT WITH</h1>

                    <div>
                        <h2 style={{margin: 0}}>LET'S WORK TOGETHER</h2>
                        <div className="contact-email">
                            <img src="/cloudedesign/icons/horizontal-line.svg" alt="line" style={{width: "32px"}}/>
                            <a href='mailto:info@cloudedesign.com' target='_blank'
                               rel="noopener noreferrer" className="contact_email-details">info@cloudedesign.com
                            </a>
                        </div>
                    </div>
                    <div>
                        <h2 style={{margin: 0}}>GIVE US A CALL</h2>
                        <div className="contact-email">
                            <span>+94 70 589 4780 / +94 11 217 5690</span>
                        </div>
                    </div>
                    <div>
                        <h2 style={{margin: 0}}>OUR LOCATION</h2>
                        <div className="contact-email">
                            <span>No159/13, Premier Park, Mullegama, Homagama,Sri Lanka</span>
                        </div>
                    </div>
                    <div>
                        <h2 style={{margin: 0}}>GET CONNECTED</h2>
                        <div className="contact-email">
                            <div className="footer_top-social_icons">
                                <img src="/cloudedesign/icons/linkedin.svg" alt="linkedin" style={{width: "30px"}}/>
                                <img src="/cloudedesign/icons/twitter.svg" alt="twitter"
                                     style={{width: "30px", marginLeft: "5px"}}/>
                                <img src="/cloudedesign/icons/youtube.svg" alt="youtube"
                                     style={{width: "30px", marginLeft: "5px"}}/>
                                <img src="/cloudedesign/icons/instagram.svg" alt="insta"
                                     style={{width: "30px", marginLeft: "5px"}}/>
                                <img src="/cloudedesign/icons/whatsapp.svg" alt="whatsapp"
                                     style={{width: "30px", marginLeft: "5px"}}/>
                                <img src="/cloudedesign/icons/facebook.svg" alt="fb"
                                     style={{width: "30px", marginLeft: "5px"}}/>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="contact-form">
                    <div className="contact-form_field-wrapper">
                        <span style={{fontWeight: "600", display: "flex", justifyContent: "start"}}>Full Name</span>
                        <input
                            type="text"
                            placeholder="Type your name here"
                        />
                    </div>
                    <div className="contact-form-two_grids">
                        <div className="contact-form_field-wrapper">
                            <span style={{
                                fontWeight: "600",
                                display: "flex",
                                justifyContent: "start"
                            }}>Email Address</span>
                            <input
                                type="text"
                                placeholder="Type your email here"
                            />
                        </div>
                        <div className="contact-form_field-wrapper">
                            <span style={{fontWeight: "600", display: "flex", justifyContent: "start"}}>Phone</span>
                            <input
                                type="text"
                                placeholder="Type your phone here"
                            />
                        </div>
                    </div>

                    <div className="contact-form_field-wrapper">
                        <span style={{
                            fontWeight: "600",
                            display: "flex",
                            justifyContent: "start"
                        }}>Required Service</span>
                        <input
                            type="text"
                            placeholder="Type your requirement here"
                        />
                    </div>

                    <div className="contact-form_field-wrapper">
                        <span style={{fontWeight: "600", display: "flex", justifyContent: "start"}}>Message</span>
                        <input
                            type="text"
                            placeholder="Type your message here"
                        />
                    </div>

                    <button className='summary_about-btn' style={{cursor: "pointer"}}>
                        Submit Message
                    </button>
                </div>
            </div>
        </>
    )
}

export default ContactForm;