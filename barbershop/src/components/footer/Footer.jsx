import React from 'react';
import logo from "../../assets/images/white-scissor-and-hair-removebg-preview.png"
import "./css/style.css";
import { Link } from "react-router-dom";
import Facebook from "../../assets/images/facebook.png";
import Whatsapp from "../../assets/images/whatsapp.png";
import Instagram from "../../assets/images/instagram.png";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__container">
            <Link to="/" className="footer__div--logo">
                <img src={logo} alt="logo" className="footer__logo"/>
            </Link>
            <ul className="footer__list">
                <li className="footer__item"><a href="https://www.facebook.com/facebook" target="_blank"><img src={Facebook} className="footer__image"/></a></li>
                <li className="footer__item"><a href="https://web.whatsapp.com/" target="_blank"><img src={Whatsapp} className="footer__image"/></a></li>
                <li className="footer__item"><a href="https://www.instagram.com/instagram/" target="_blank"><img src={Instagram} className="footer__image"/></a></li>
            </ul>
            </div>
        </div>
    );
}

export default Footer;