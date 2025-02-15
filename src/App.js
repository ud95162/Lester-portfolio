import './App.css';
import './summary.css';
import {Route, Routes} from "react-router-dom";
import Home from "./Components/Portfolio/Home";
import Footer from "./Components/Portfolio/Footer";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
            <div id="contact-us-section">

                <Footer/>
            </div>
            </>
            );
            }

            export default App;
