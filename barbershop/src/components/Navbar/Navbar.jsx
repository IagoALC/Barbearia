import React from "react";
import "./style.css";
import logo from "../../assets/images/white-scissor-and-hair-removebg-preview.png"
import { Link } from "react-router-dom"

function Navbar({ direction }) {
    return (
        <nav id="navbar-nav">
            <div class="navbar-container">
                <Link to="/"><img src={logo} alt="logo" className="navbar-logo" /></Link>
                <ul className="navbar-list">
                    <li className="navbar-item"><Link to="/" className="navbar-link">HOME</Link></li>
                    <li className="navbar-item"><Link to ="/services" className="navbar-link">SERVICES</Link></li>
                    <li className="navbar-item"><Link to ="/contact" className="navbar-link">CONTACT</Link></li>
                </ul>
            </div>
        </nav >
    );
}

export default Navbar;