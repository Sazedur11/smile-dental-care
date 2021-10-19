import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, price, description, img } = service;
    return (
        <div id="services" className="service-card">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price ${price}</p>
            <p>{description}</p>
            <Link to={`/booking/${id}`}>
                <button className="btn btn-info">Booking {name}</button>
            </Link>
        </div>
    );
};

export default Service;