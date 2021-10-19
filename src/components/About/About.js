import React from 'react';
import './About.css'

const About = () => {
    return (
        <div id="about" className="about-container">
            <div className="col-md-4 first-col">
                <h4>Dental Care for The Whole Family</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p><b>Adult Care</b></p>
                <p><b>Child Care</b></p>
                <p><b>Orthodontic Care</b></p>
            </div>
            <div className="col-md-8 second-col">
                <h3>About Our Service</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
                <button className="btn btn-info ab-btn">Book Appoinment</button>
            </div>
        </div>
    );
};

export default About;