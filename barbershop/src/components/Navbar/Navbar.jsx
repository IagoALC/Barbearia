import React from "react";
import "./css/style.css";
import logo from "../../assets/images/white-scissor-and-hair-removebg-preview.png"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <Link to="/"><img src={logo} alt="logo" className="navbar__logo" /></Link>
                <ul className="navbar__list">
                    <li className="navbar__item"><Link to="/" className="navbar__link">HOME</Link></li>
                    <li className="navbar__item"><Link to ="/services" className="navbar__link">SERVICES</Link></li>
                    <li className="navbar__item"><Link to ="/contact" className="navbar__link">CONTACT</Link></li>
                </ul>
            </div>
        </nav >
    );
}

export default Navbar;