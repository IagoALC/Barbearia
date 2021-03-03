import React, { Fragment } from 'react';
import "./style.css";
import banner from "../../assets/images/barber-shop-banner.jpg";
import place from "../../assets/images/place.jpg";

function Index() {
    return (
        <>
            <div className="index-slogan-container">
                <img src={banner} alt="banner barbershop" className="index-banner" />
                <div className="index-slogan">
                    <h1 className="index-slogan-title">Barbershop</h1>
                    <p className="index-slogan-message">The best barbershop in the city!</p>
                </div>
            </div>
            <div className="index-aboutUs">
                <div className="index-aboutUs-container">
                    <h1 className="index-aboutUs-title">What our barber shop can offer?</h1>
                    <div className="index-aboutUs-details">
                        <ul className="index-aboutUs-list">
                            <li className="index-aboutUs-item">Great customer service</li>
                            <li className="index-aboutUs-item">Awesome place</li>
                            <li className="index-aboutUs-item">Location</li>
                            <li className="index-aboutUs-item">Qualified professionals</li>
                        </ul>
                        <img src={place} className="index-aboutUs-image" alt="place" />
                    </div>
                </div>
            </div>
            <div class="index-latestVideo">
                <div className="index-video-container">
                    <h1 className="index-latestVideo-title">Our latest video</h1>
                    <iframe className="index-latestVideo-video" src="https://www.youtube.com/embed/Vx99n8pTl4g" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
            </div>
        </>
    );
}

export default Index;