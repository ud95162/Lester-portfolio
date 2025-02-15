import './footer.css';
import { FaYoutube, FaFacebookF, FaLinkedinIn} from 'react-icons/fa';
import {FaXTwitter} from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <div className="footer_container">
                <div className="footer_top">
                        <div className='footer-top-left'>
                            <p style={{color:'white',fontWeight:800}}>Sign up for newsletter</p>
                            <img src='/portfolio/right-arrows.svg' width='30px' alt={"right-arrow"} style={{color:"white"}} />
                        </div>
                    <div className={'footer-top-right'}>
                        <div></div>
                        <div></div>
                        <div className="left-right-border">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="white-font"><FaFacebookF/></a>
                        </div>
                        <div className="right-border">
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className='white-font'><FaXTwitter/></a>
                        </div>
                        <div className="right-border">
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="white-font"><FaYoutube/></a>
                        </div>
                        <div className="right-border">
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="white-font"><FaLinkedinIn/></a>
                        </div>
                    </div>
                </div>
                <div className="footer-body">
                    <div>
                        <h2 className="sub-header">Address</h2>
                        <p className="white-font">No 401/2,Pitipana Road, Homagama, SriLanka</p>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <h2 className="sub-header">Call Us</h2>
                        <p className="white-font">+94717430419</p>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <h2 className="sub-header">Email Us</h2>
                        <p className="white-font">info@natbound.lk</p>
                    </div>
                </div>
                <div className="footer-bottom-section">
                    <div className="bottom-section-container">
                        <p  className="nav-links">Home</p>
                        <div className="small-divider"></div>
                        <p className="nav-links">Portfolio</p>
                        <div className="small-divider"></div>
                        <p className="nav-links">About Us</p>
                        <div className="small-divider"></div>
                        <p className="nav-links">Contact Us</p>
                    </div>
                    <div className="bottom-right-section">
                        <div className="bottom-section-container">
                            <span className="nav-links-right">Privacy Policy</span>
                            <div className="small-divider"></div>
                            <span className="nav-links-right">Terms & Conditions</span>
                            <div className="small-divider"></div>
                            <span className="nav-links-right">Site Map</span>
                        </div>
                        <div className="bottom-section-container">
                            <span className="nav-links-right">© 2025 Lester Perera. All Rights Reserved</span>
                            <div className="small-divider"></div>
                            <span className="nav-links-right">Design and  Develop by Cloud Design</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer;