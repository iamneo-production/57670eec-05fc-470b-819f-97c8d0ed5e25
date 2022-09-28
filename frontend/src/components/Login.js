import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

import './Login.css';
import {Link} from 'react-router-dom';


function Login(){

    

   
return (
    <div className="login-form-wrap">

        <form className="login-form" >
            <h1>LOGIN PAGE</h1>
            <p>
                <input type="text" placeholder="username" 
                name="usernamee" required/>
            </p>

            <p>
                <input type="password"  placeholder="Password" 
                name="password" required/>
            </p>

            <p>
                <input type="submit" value="Login"/>
            </p>

            <div className="create-account-wrap">
            <p>Not a member? <Link to="/user/singup">Create Account</Link></p>
            </div>
            
        </form>
    </div>
);
}

export default Login;



