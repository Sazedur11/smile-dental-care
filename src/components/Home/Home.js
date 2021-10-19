import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div id="home">
            <div className="top-fold">
                <Banner></Banner>
            </div>
            <About></About>
            <Services></Services>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;