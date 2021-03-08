import react from "react";
import "./style.css";
import Beard from "../../assets/images/barba.jpg";
import Hair from "../../assets/images/cabelo.jpg";
import HairBeard from "../../assets/images/cabelo+barba.jpg";

function Services() {
    return (
        <div className="services-container">
            <div className="services-grid">
                <div className="services-box">
                    <img src={Hair} alt="hair" className="services-image" />
                    <div className="services-text">
                        <h1 className="services-title">Hair</h1>
                        <p className="services-msg">Best hair cut in the city</p>
                        <h2 className="services-price">U$ 15.00</h2>
                    </div>
                </div>
                <div class="services-box">
                    <img src={Beard} alt="beard" className="services-image" />
                    <div class="services-text">
                        <h1 className="services-title">Beard</h1>
                        <p className="services-msg">Shave your beard</p>
                        <h2 className="services-price">U$ 10.00</h2>
                    </div>
                </div>
                <div className="services-box">
                    <img src={HairBeard} alt="beard" className="services-image" />
                    <div className="services-text">
                        <h1 className="services-title">Hair and Beard</h1>
                        <p className="services-msg">Combo service</p>
                        <h2 className="services-price">U$ 23.00</h2>
                    </div>
                </div>

                <div className="services-box">
                    <img src={HairBeard} alt="beard" className="services-image" />
                    <div className="services-text">
                        <h1 className="services-title">Hair and Beard</h1>
                        <p className="services-msg">Combo service</p>
                        <h2 className="services-price">U$ 23.00</h2>
                    </div>
                </div>
                <div className="services-box">
                    <img src={HairBeard} alt="beard" className="services-image" />
                    <div className="services-text">
                        <h1 className="services-title">Hair and Beard</h1>
                        <p className="services-msg">Combo service</p>
                        <h2 className="services-price">U$ 23.00</h2>
                    </div>
                </div>
                <div className="services-box">
                    <img src={HairBeard} alt="beard" className="services-image" />
                    <div className="services-text">
                        <h1 className="services-title">Hair and Beard</h1>
                        <p className="services-msg">Combo service</p>
                        <h2 className="services-price">U$ 23.00</h2>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Services;