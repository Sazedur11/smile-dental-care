import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setservices] = useState([]);

    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setservices(data));
    }, [])
    return (
        <div id="services" className="service-container">
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;