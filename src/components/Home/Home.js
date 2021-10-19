import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div id="home">
            <div className="top-fold">
                <Banner></Banner>
            </div>
            <h2>This is home</h2>
            <Services></Services>
        </div>
    );
};

export default Home;