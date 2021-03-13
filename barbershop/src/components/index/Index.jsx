import React, { Fragment } from 'react';
import "./css/style.css";
import place from "../../assets/images/place.jpg";
import Video from "../../assets/videos/video.mp4"
import location from "../../assets/images/location.jpg"

function Index() {
    return (
        <>
            <section className="index--banner">
                <video autoplay="autoplay" muted loop className="index--banner__video">
                    <source src={Video} type="video/mp4" />
                </video>
                <div className="index--banner__slogan">
                    <h1 className="index--banner__slogan__title">Barbershop</h1>
                    <p className="index--banner__slogan__message">The best barbershop in the city!</p>
                </div>
            </section>

            <section className="index--aboutUs">
                <div className="index--aboutUs__container">
                    <h1 className="index--aboutUs__title">What our barber shop can offer?</h1>
                    <div className="index--aboutUs__details">
                        <ul className="index--aboutUs__list">
                            <li className="index--aboutUs__list__item">Great customer service</li>
                            <li className="index--aboutUs__list__item">Awesome place</li>
                            <li className="index--aboutUs__list__item">Location</li>
                            <li className="index--aboutUs__list__item">Qualified professionals</li>
                        </ul>
                        <img src={place} className="index--aboutUs__image" alt="place" />
                    </div>
                </div>
            </section>

            <section class="index--latestVideo">
                <div className="index--latestVideo__container">
                    <h1 className="index--latestVideo__title">Our latest video</h1>
                    <iframe className="index--latestVideo__video" src="https://www.youtube.com/embed/Vx99n8pTl4g" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"></iframe>
                </div>
            </section>
        </>
    );
}

export default Index;