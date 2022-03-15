import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import helpers from './helpers'
import './Register.scss';

const Register = () => {
    const [username, setUsername] = useState()
    const [location, setLocation] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState()

    const navigate = useNavigate();
    const { registerUser } = helpers

    const changeHandler = (e, setterMethod) => {        
        const currentValue = e.target.value
        setterMethod(currentValue)
    }

    const onSubmit = e => {
        e.preventDefault();
        const newUser = {
              username,
              location,
              email,
              password
            };
        registerUser(newUser, setError, navigate)
    }

    const mainClass = 'register-page'

    return (
        <div id={`${mainClass}-container`}>
            <div id={`${mainClass}-inputs`}>
                <label for="name">Name</label><br /><input type="text" id={`${mainClass}-name`} onChange={(e) => changeHandler(e, setUsername)} /><br /><br />
                <label for="location">Location</label><br /><input type="text" id={`${mainClass}-location`} onChange={(e) => changeHandler(e, setLocation)} /><br /><br />
                <label for="email">Email</label><br /><input type="text" id={`${mainClass}-email`} onChange={(e) => changeHandler(e, setEmail)} /><br /><br />
                <label for="password">Password</label><br /><input type="password" id={`${mainClass}-password`} onChange={(e) => changeHandler(e, setPassword)} />
            </div>

            {error && <span id={`${mainClass}-errorText`}>{error?.message}</span>}

            <button id={`${mainClass}-submit`} onClick={onSubmit}>Register</button>
        </div>
    )
}

export default Register