import React from 'react';
import './Login.css';

function Admin(){
    return(
        <div className="login-form-wrap">
            <form className="login-form">
                <h1>Admin Page</h1>
                <p>
                    <input type="text" placeholder="username" required/>
                </p>
                <p>
                   <input type="email" placeholder="Password" required/>
                </p>
                <p>
                    <input type="submit" value="Login"/>
                </p>

                <div className="create-account-wrap">
                <p>Not a member? <a href="#">Create Account</a></p>
                </div>
            </form>
        </div>              
    )
}

export default Admin;