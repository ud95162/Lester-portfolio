import './App.css';
import Header from "./Components/CloudeDesign/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./Components/CloudeDesign/Home";
import Footer from "./Components/CloudeDesign/Footer";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
