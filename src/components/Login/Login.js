import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoole } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const handleGoogleLogin = () => {
        signInUsingGoole()
            .then(result => {
                history.push(redirect_uri)
            })

    }

    return (
        <div>
            <h2>Please Log In</h2>
            <button onClick={handleGoogleLogin}>Google Log In</button>
            <br />
            <Link to="/register">New user?</Link>
        </div>
    );
};

export default Login;