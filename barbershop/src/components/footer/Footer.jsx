import React from 'react';
import logo from "../../assets/images/white-scissor-and-hair-removebg-preview.png"
import "./style.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <Link to="/">
                <img src={logo} alt="logo" className="footer-logo"/>
            </Link>
        </div>
    );
}

export default Footer;