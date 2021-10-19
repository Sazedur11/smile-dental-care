import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-section">
            <div className="col-md-6 padding: 20px;">
                <h2>Smile Dental Care</h2>
                <p>General, Cosmetic, and Restorative Dentistry</p>
                <Link to={`/login`}>
                    <button className="btn btn-info">Book Appointment</button>
                </Link>
            </div>
            <div className="col-md-6">
            </div>
        </div>
    );
};

export default Banner;