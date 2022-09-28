import React from 'react';
import {
    BrowserRouter,Routes,Route,
    Link
} from 'react-router-dom';
const Navbar =()=>{
    return (
        <div>
    
        <h2>Track Your Loan Application</h2>
            <form >
                <input type="text"  placeholder="Enter Your Loan Id"  />
            </form>
            <div className='col '>
                <Link to="/track">
                <button type="button" className="btn">Track</button>
                </Link>
            </div>
       
        </div>

    )
};
export default Navbar;