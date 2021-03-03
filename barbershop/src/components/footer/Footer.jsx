import React from 'react';
import logo from "../../assets/images/white-scissor-and-hair-removebg-preview.png"
import "./style.css";

function Footer() {
    return (
        <div className="footer">
            <a href="#">
                <img src={logo} alt="logo" className="footer-logo"/>
            </a>
        </div>
    );
}

export default Footer;