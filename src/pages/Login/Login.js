import React from 'react';
import './Login.scss';

const Login = () => {
    return (
        <div id="login-page-container">
            <label for="email">Email</label><br /><input type="text" id="email" /><br /><br />
            <label for="password">Password</label><br /><input type="password" id="password" />
        </div>
    )
}

export default Login