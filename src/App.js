import './App.css';
import './summary.css';
import Header from "./Components/CloudeDesign/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./Components/CloudeDesign/Home";
import Footer from "./Components/CloudeDesign/Footer";
import Services from "./Components/CloudeDesign/Services";
import AboutUs from "./Components/CloudeDesign/AboutUs";
import Careers from "./Components/CloudeDesign/Careers";
import ContactUs from "./Components/CloudeDesign/ContactUs";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/about" element={<AboutUs/>}/>
                <Route path="/work_with_us" element={<Careers/>}/>
                <Route path="/contact" element={<ContactUs/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
