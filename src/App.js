import React from "react";
import ReactDOM from "react-dom";
import InterestComponent from "./InterestComponent"; 
import AboutComponent from "./AboutComponent";
import InfoComponent from "./InfoComponent";
import Footer from "./footer";


export default function App(){
    return(
        <div className="content">
            <InfoComponent />
            <AboutComponent />
            <InterestComponent /> 
            <Footer />
        </div>
    )
}
