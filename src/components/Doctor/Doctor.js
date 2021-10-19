import React from 'react';
import './Doctor.css'

const Doctor = ({ doctor }) => {
    const { name, description, img } = doctor;
    return (
        <div id="doctors" className="doctor-card">
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>{description}</p>
        </div>
    );
};

export default Doctor;