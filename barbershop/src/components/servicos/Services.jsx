import react from "react";
import Beard from "../../assets/images/barba.jpg";
import Hair from "../../assets/images/cabelo.jpg";
import HairBeard from "../../assets/images/cabelo+barba.jpg";
import "./css/style.css"

function Services() {
    return (
        <div className="services">
            <div className="services__container">
                <div className="services__box">
                    <img src={Hair} alt="hair" className="services__box__image" />
                    <div className="services__box__div">
                        <h1 className="services__box__title">Hair</h1>
                        <p className="services__box__msg">Best hair cut in the city</p>
                        <h2 className="services__box__price">U$ 15.00</h2>
                    </div>
                </div>
                <div className="services__box">
                    <img src={Beard} alt="beard" className="services__box__image" />
                    <div className="services__box__div">
                        <h1 className="services__box__title">Beard</h1>
                        <p className="services__box__msg">Shave your beard</p>
                        <h2 className="services__box__price">U$ 10.00</h2>
                    </div>
                </div>
                <div className="services__box">
                    <img src={HairBeard} alt="beard" className="services__box__image" />
                    <div className="services__box__div">
                        <h1 className="services__box__title">Hair and Beard</h1>
                        <p className="services__box__msg">Combo service</p>
                        <h2 className="services__box__price">U$ 23.00</h2>
                    </div>
                </div>

                <div className="services__box">
                    <img src={HairBeard} alt="beard" className="services__box__image" />
                    <div className="services__box__div">
                        <h1 className="services__box__title">Hair and Beard</h1>
                        <p className="services__box__msg">Combo service</p>
                        <h2 className="services__box__price">U$ 23.00</h2>
                    </div>
                </div>
                <div className="services__box">
                    <img src={HairBeard} alt="beard" className="services__box__image" />
                    <div className="services__box__div">
                        <h1 className="services__box__title">Hair and Beard</h1>
                        <p className="services__box__msg">Combo service</p>
                        <h2 className="services__box__price">U$ 23.00</h2>
                    </div>
                </div>
                <div className="services__box">
                    <img src={HairBeard} alt="beard" className="services__box__image" />
                    <div className="services__box__div">
                        <h1 className="services__box__title">Hair and Beard</h1>
                        <p className="services__box__msg">Combo service</p>
                        <h2 className="services__box__price">U$ 23.00</h2>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Services;