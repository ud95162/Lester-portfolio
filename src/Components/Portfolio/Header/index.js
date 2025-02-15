import React from 'react';
import './header.css';

const Header = () => {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({behavior: 'smooth'});
        }
    };
            return (
        <div className="header">
            <div className="menu-list">
                <ul>
                    <li className="list-item"><a>Home</a></li>
                    <li className="list-item"><a onClick={() => scrollToSection('portfolio-section')}>Portfolio</a></li>
                    <li className="list-item"><a onClick={() => scrollToSection('aboutus-section')}>About us</a></li>
                    <li className="list-item"> <a onClick={() => scrollToSection('contact-us-section')}>contact us</a></li>
                </ul>
            </div>
            <div className="logo" style={{backgroundImage:'url(/portfolio/logo-transparent.png)'}}>
            </div>
            <div className="header-button-container">
                <button>Make an Appointment
                </button>
            </div>

        </div>
    )
}
export default Header;