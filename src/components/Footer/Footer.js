import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="col-md-4">
                <h5>Smile Dental Care</h5>
                <p>General, Cosmetic, and Restorative Dentistry</p>
            </div>
            <div className="col-md-4">
                <h3>Contact us</h3>
                <p>mail: exmaple@gmail.com</p>
                <p>phone: +5555555555</p>
            </div>
            <div className="col-md-4">
                <h5>Opening Hours</h5>
                <p>Mon-Fri: 10:00am - 5:00pm</p>
                <p>San-Sun: Off day</p>
            </div>
        </div>
    );
};

export default Footer;