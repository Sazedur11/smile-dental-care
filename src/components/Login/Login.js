import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoole } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const redirect_uri = location.state?.from || '/';
    const auth = getAuth();



    const handleGoogleLogin = () => {
        signInUsingGoole()
            .then(result => {
                history.push(redirect_uri)
            })

    }
    const handleRegister = e => {
        // console.log(name, email, password);
        createUserWithEmailAndPassword(auth, email, password, displayName)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
        e.preventDefault();
    }
    const handleNameChange = e => {
        setDisplayName(e.target.value)
    }
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    return (
        <div className="login-container">
            <h2>Please Log In</h2>
            <form onSubmit={handleRegister}>
                <input onBlur={handleNameChange} type="text" name="name" placeholder="Your name" id="" />
                <br />
                <input onBlur={handleEmailChange} type="text" name="email" placeholder="Your email" />
                <br />
                <input onBlur={handlePasswordChange} type="password" name="password" placeholder="Password" />
                <br />
                <input type="submit" value="Sign In" />
            </form>
            <div>-----------</div>
            <button onClick={handleGoogleLogin}>Google Log In</button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
};

export default Login;