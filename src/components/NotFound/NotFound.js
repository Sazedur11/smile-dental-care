import React from 'react';
import './NotFound.css'
import notFound from '../../images/404.png'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notfound">
            <h3>This page not found</h3>
            <img src={notFound} alt="" />
            <br />
            <Link to="/"><button>Go back Home</button></Link>
        </div>
    );
};

export default NotFound;