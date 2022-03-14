import React from 'react';
import './Register.scss';

const Register = () => {
    return (
        <div id="register-page-container">
            <label for="name">Name</label><br /><input type="text" id="name" /><br /><br />
            <label for="email">Email</label><br /><input type="text" id="email" /><br /><br />
            <label for="password">Password</label><br /><input type="password" id="password" />
        </div>
    )
}

export default Register