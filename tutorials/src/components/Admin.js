import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

import './Login.css';

function Admin(){

    


    return(
        <div className="login-form-wrap" >
            <form className="login-form" >
                <h1>ADMIN PAGE</h1>
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
                <p>Not a member? <a>Create Account</a></p>
                </div>
                
            </form>
        </div>
    )
}

export default Admin;
