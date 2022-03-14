import React, { useState } from 'react';
import helpers from './helpers'
import './Login.scss';

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

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

        loginUser(userData)
    };

    return (
        <div id="login-page-container">
            <div id="login-page-inputs">
                <label for="email">Email</label><br /><input type="text" id="email" onChange={(e) => changeHandler(e, setEmail)} /><br /><br />
                <label for="password">Password</label><br /><input type="password" id="password" onChange={(e) => changeHandler(e, setPassword)} />
            </div>
      

            <button id="login-page-submit" onClick={onSubmit} >Login</button>
        </div>
    )
}

export default Login