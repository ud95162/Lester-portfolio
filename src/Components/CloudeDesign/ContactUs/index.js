import ServiceBanner from "../Services/Banner";
import React from "react";
import Summary from "../Home/Summary";
import ContactForm from "./ContactForm";

const ContactUs = () => {
    return (
        <>
            <ServiceBanner
                backgroundImage="/cloudedesign/contactus/Banner.jpg"
                defaultHeader="WE'D LOVE TO HEAR IT FROM YOU!"
                gradientHeader="GET IN TOUCH TODAY."
            />
            <Summary
                breadcrumb="CONTACT US"
                gradientHeader="HAVE A QUERY?"
                defaultHeader="CONTACT US NOW!"
                sectionImage="/cloudedesign/contactus/robot.png"
                content={"Got questions or need assistance? Our team is here to help you every step of the way." +
                    "Reach out to us, and let's make things happen together!"}
            />

            <ContactForm/>
        </>
    )
}

export default ContactUs;