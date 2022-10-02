import React from "react";
import Navbar from "./Navbar"

function Header(){
    return (
        <div id='main'>
            <Navbar/>
            <div className="name">
                <h1><span>Launch Your app</span>   
                With Confidence and Creativity</h1>
                <p className="details">Lorems is the great for writing automatic code</p>
                <a href='#' className="cv-btn">Download</a>
            </div>
    
        </div>
    )
}
export default Header;