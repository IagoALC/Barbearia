import React from "react";
import "./style.css";
import logo from "../../assets/images/white-scissor-and-hair-removebg-preview.png"

function Navbar() {
    return (
        <nav id="navbar-nav">
            <div class="navbar-container">
                <a href="#"><img src={logo} alt="logo" className="navbar-logo" /></a>
                <ul className="navbar-list">
                    <li className="navbar-item"><a href="#" className="navbar-link">HOME</a></li>
                    <li className="navbar-item"><a href="#" className="navbar-link">SERVICES</a></li>
                    <li className="navbar-item"><a href="#" className="navbar-link">CONTACT</a></li>
                </ul>
            </div>
        </nav >
    );
}

export default Navbar;