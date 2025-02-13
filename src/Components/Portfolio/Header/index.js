import React, { useState, useEffect } from 'react';
import './header.css';
// import { useNavigate, useLocation } from 'react-router-dom';
//
// const Header = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [showHeader, setShowHeader] = useState(false);
//     const [activeNav, setActiveNav] = useState('/'); // State to track active navigation
//     const navigate = useNavigate();
//     const location = useLocation();
//
//     const handleNavigate = (path) => {
//         setActiveNav(path);
//         navigate(path);
//         window.scrollTo(0, 0); // Reset scroll position to top
//
//     };
//
//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };
//
//     useEffect(() => {
//         const handleScroll = () => {
//             // Show the header only when scrolled down
//             setShowHeader(window.scrollY > 0);
//         };
//
//         // Attach scroll event listener
//         window.addEventListener('scroll', handleScroll);
//
//         // Clean up the event listener
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);
//
//     useEffect(() => {
//         setActiveNav(location.pathname);
//     }, [location]);
//
//
//     // Conditionally render header based on route and scroll
//     if ((location.pathname === '/' ||
//             location.pathname === '/services'||
//             location.pathname === '/about' || location.pathname === '/work_with_us' ||
//             location.pathname === '/contact')
//         && !showHeader) {
//         return null; // Hide header
//     }
//
//     return (
//         <div className="header">
//             <div className="logo">
//                 <img src="/cloudedesign/cloude_logo_black.png" alt="logo" style={{ height: "60px" }} />
//             </div>
//             <div className="nav-bar">
//                 <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                 </div>
//
//                 {/* Menu Items */}
//                 <ul className={`banner_menu-items ${isMenuOpen ? 'show' : ''}`}>
//                     <li className={`banner_nav-item ${activeNav === '/' ? 'active' : ''}`}>
//                         <a onClick={() => handleNavigate('/')}>HOME</a>
//                     </li>
//                     {/*<li className={`banner_nav-item ${activeNav === '/services' ? 'active' : ''}`}>*/}
//                     {/*    <a onClick={() => handleNavigate('/services')}>OUR SERVICES</a>*/}
//                     {/*</li>*/}
//                     {/*<li className={`banner_nav-item ${activeNav === '/work_with_us' ? 'active' : ''}`}>*/}
//                     {/*    <a onClick={() => handleNavigate('/work_with_us')}>WORK WITH US</a>*/}
//                     {/*</li>*/}
//                     {/*<li className={`banner_nav-item ${activeNav === '/about' ? 'active' : ''}`}>*/}
//                     {/*    <a onClick={() => handleNavigate('/about')}>ABOUT US</a>*/}
//                     {/*</li>*/}
//                     {/*<li className={`banner_nav-item ${activeNav === '/contact' ? 'active' : ''}`}>*/}
//                     {/*    <a onClick={() => handleNavigate('/contact')}>CONTACT US</a>*/}
//                     {/*</li>*/}
//                     <li></li>
//                 </ul>
//
//                 {/* Get Template Button (visible on desktop only) */}
//                 <div className="menu-items">
//                     <div className="nav-item">
//                     <button className="header-button" style={{cursor: "pointer"}}
//                             onClick={() =>
//                                 window.open(
//                                     'https://wa.me/+94705894780?text=Hi%20there!%20I%20would%20like%20to%20talk%20to%20you.',
//                                     '_blank'
//                                 )
//                             }>
//                             Talk to Us
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Header;


const Header = () => {
    return (
        <div className="header">
            <div className="menu-list">
                <ul >
                    <li className="list-item"><a>Home</a></li>
                    <li className="list-item"><a>Portfolio</a></li>
                    <li className="list-item"><a>About us</a></li>
                    <li className="list-item"> <a>contact us</a></li>
                </ul>
            </div>
            <div className="logo"></div>
            <div className="button-container">
                <button >
                    Make an Appointment

                </button>
            </div>

        </div>
    )
}
export default Header;