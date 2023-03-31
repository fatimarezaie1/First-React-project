import React from "react";
import fontawesome from './font awesome/css/all.min.css'
export default function Footer(){
    return(
        <div className="footer">
            <ul className="list">
                <li><a href="www.facebook.com"><span className="fa fa-user"></span></a></li>
                <li><a href="www.instagram.com"><i className="fa fa-phone"></i></a></li>
                <li><a href="www.github.com"><span className="fa fa-home"></span></a></li>
                <li><a href="www.twitter.com"><span className="fa fa-computer"></span></a></li>
            </ul>
        </div>
    )
}