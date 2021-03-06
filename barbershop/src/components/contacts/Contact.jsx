import React, { useState } from 'react';
import "./css/style.css"

const Contact = ({ userData }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [contact, setContact] = useState("");
    const [time, setTime] = useState("Morning");
    const [emailReceiver, setEmailReceiver] = useState(false);

    const data = {
        name: name,
        email: email,
        phone: phone,
        contact: contact,
        time: time,
        emailReceiver: emailReceiver
    }

    return (
        <div className="contact">
            <form onSubmit={userData(data)}>
                <div className="contact__form--group">
                    <label for="nome">NAME</label>
                    <input type="text" className="contact__input" name="nome" id="nome" onChange={(event) => {
                        setName(event.target.value);
                    }} />
                </div>
                <div className="contact__form--group">
                    <label for="email">E-MAIL</label>
                    <input type="email" className="contact__input" name="email" id="email" onChange={(event) => {
                        setEmail(event.target.value);
                    }} />
                </div>
                <div className="contact__form--group">
                    <label for="phone">PHONE NUMBER</label>
                    <input type="text" className="contact__input" name="phone" id="phone" onChange={(event) => {
                        setPhone(event.target.value);
                    }} />
                </div>
                <div className="contact__form--group">
                    <h1 className="contact__title--contact">How do you prefer to be contact?</h1>
                    <div className="contact__group--radio">
                        <input type="radio" name="contact-radio" id="radio-whatsapp" onClick={radioChange} /> <label for="radio-whatsapp">Whatsapp</label>
                    </div>
                    <div className="contact__group--radio">
                        <input type="radio" name="contact-radio" id="radio-phone" onClick={radioChange} /> <label for="radio-phone">Cell phone</label>
                    </div>
                    <div className="contact__group--radio">
                        <input type="radio" name="contact-radio" id="radio-email" onClick={radioChange} /> <label for="radio-email">Email</label>
                    </div>
                </div>
                <div className="contact__form--group">
                    <h1 for="time" className="contact__title--time">What time?</h1>
                    <select name="time" id="time" className="contact__select" onChange={(event) => {
                        setTime(event.target.value);
                    }}>
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                        <option value="Evening">Evening</option>
                    </select>
                </div>
                <div className="contact__form--group">
                    <input type="checkbox" name="email_receiver" id="email_receiver" onChange={(event) => {
                        setEmailReceiver(event.target.checked);
                    }} /><label for="email_receiver" className="contact__email--receiver">Do you want to receive our emails?</label>
                </div>
                <div className="contact__form--group">
                    <button type="submit" className="contact__button" onClick={(event) => event.preventDefault()}>Send</button>
                </div>

            </form>
        </div >
    );
    function radioChange(event) {
        setContact(event.target.id);
    }
}

export default Contact;