import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css'

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('./doctors.JSON')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])
    return (
        <div id="doctors" className="dctr">
            <h3>This Is Our Team</h3>
            <div className="doctors-container">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>

        </div>
    );
};

export default Doctors;