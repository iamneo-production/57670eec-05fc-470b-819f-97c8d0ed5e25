import React from 'react';

import './navbar.css';

import {Link} from 'react-router-dom';



function navgate(){

    return (
        <nav className="nav">
            <Link to="/Home" className="nav__brand">Business Loan</Link>
            <ul className="nav__menu">
                <li className="nav__item"><Link to="/Admin/login" className="nav__link">Admin Login</Link></li>
                <li className="nav__item"><Link to="/user/login" className="nav__link">Login</Link></li>
                <li className="nav__item"><Link to="/user/singup" className="nav__link">Register</Link></li>
            </ul>
            
        </nav>
    );
}


export default navgate;