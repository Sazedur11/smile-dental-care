import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoole } = useAuth();
    return (
        <div>
            <h2>Please Log In</h2>
            <button onClick={signInUsingGoole}>Google Log In</button>
            <br />
            <Link to="/register">New user?</Link>
        </div>
    );
};

export default Login;