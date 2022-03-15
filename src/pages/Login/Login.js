import React, { useState } from 'react';
import helpers from './helpers'
import './Login.scss';

const Login = ({ setIsUserLoggedIn }) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState()

    const { loginUser } = helpers

    const changeHandler = (e, setterMethod) => {        
        const currentValue = e.target.value
        setterMethod(currentValue)
    }

    const onSubmit = e => {
        e.preventDefault();
        const userData = {
                email,
                password
            };

        loginUser(userData, setError, setIsUserLoggedIn)
    };

    const mainClass = 'login-page'

    return (
        <div id={`${mainClass}-container`}>
            <div id={`${mainClass}-inputs`}>
                <label for="email">Email</label><br /><input type="text" id={`${mainClass}-email`} onChange={(e) => changeHandler(e, setEmail)} /><br /><br />
                <label for="password">Password</label><br /><input type="password" d={`${mainClass}-password`} onChange={(e) => changeHandler(e, setPassword)} />
            </div>
      
            {error && <span id={`${mainClass}-errorText`}>{error?.message}</span>}

            <button id={`${mainClass}-submit`} onClick={onSubmit} >Login</button>
        </div>
    )
}

export default Login