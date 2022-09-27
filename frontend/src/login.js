import React from 'react';
import './login.css';

function Login(){

    return(
        <div className="login-form-wrap">
            <form className="login-form">
                <h1>Login Page</h1>
                <p>
                    <input type="text" placeholder="username"
                </p>
                <p>
                    <input type="email" placeholder="Password"
                </p>
                <p>
                    <input type="submit" value="Login"/>
                </p>

                <div className="create-account-wrap">
                <p>Not a member? <a href="#">Create Account</a></p>
                </div>
            </form>
        </div>
    );
}

export default Login;
