import './footer.css';

const Footer = () => {
    return (
        <>
            <div className="footer_container">
                <div className="footer_top">
                    <div className="footer_top-header">
                        <h1 style={{fontSize: "88px"}}>TALK TO US</h1>
                    </div>
                    <div className="footer_top-arrow">
                        <img src="/cloudedesign/icons/right-arrow-black.svg" alt="black-arrow" style={{width: "60px"}}/>
                    </div>
                    <div className="footer_top-social_icons">
                        <img src="/cloudedesign/icons/linkedin.svg" alt="linkedin" style={{width: "30px"}}/>
                        <img src="/cloudedesign/icons/twitter.svg" alt="twitter" style={{width: "30px", marginLeft: "5px"}}/>
                        <img src="/cloudedesign/icons/youtube.svg" alt="youtube" style={{width: "30px", marginLeft: "5px"}}/>
                        <img src="/cloudedesign/icons/instagram.svg" alt="insta" style={{width: "30px", marginLeft: "5px"}}/>
                        <img src="/cloudedesign/icons/whatsapp.svg" alt="whatsapp" style={{width: "30px", marginLeft: "5px"}}/>
                        <img src="/cloudedesign/icons/facebook.svg" alt="fb" style={{width: "30px", marginLeft: "5px"}}/>
                    </div>
                </div>

                <div className="footer-body">
                    <div className="footer-body_section">
                        <h3>NAVIGATION</h3>
                        <span style={{fontWeight: 600}}>HOME</span>
                        <span style={{fontWeight: 600}}>OUR SERVICES</span>
                        <span style={{fontWeight: 600}}>WORK WITH US</span>
                        <span style={{fontWeight: 600}}>ABOUT US</span>
                    </div>

                    <div className="footer-body_section">
                        <h3>COMPANY</h3>
                        <span style={{fontWeight: 600}}>CAREERS</span>
                        <span style={{fontWeight: 600}}>CONTACT</span>
                        <span style={{fontWeight: 600}}>FAQS</span>
                        <span style={{fontWeight: 600}}>ABOUT US</span>
                    </div>

                    <div className="footer-body_section">
                        <h3>RESOURCES</h3>
                        <span style={{fontWeight: 600}}>TERMS & CONDITIONS</span>
                        <span style={{fontWeight: 600}}>PRIVACY</span>
                        <span style={{fontWeight: 600}}>CHANGELOG</span>
                    </div>

                    <div className="footer-body_section">
                        <img src="/cloudedesign/cloude_logo_black.png" alt="logo" style={{width: "320px"}}/>
                        <span style={{textAlign: "center", fontSize: "12px"}}>© CloudeDesign 2024 - All Rights Reserved </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;