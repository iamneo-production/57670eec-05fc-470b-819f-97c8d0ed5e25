import React from 'react';
import "./styles/main.css";
import {Link} from 'react-router-dom';

const Track =()=>{
    return (
        <>
       
       <h2>After pressing track</h2>
            <form >
                <input type="text"  placeholder="Enter Your Loan Id"  />
            </form>
            <div className='col '>
                <Link to="/track">
                <button type="button" className="btn">Track</button>
                </Link>
            </div>
       </>
    )
}

export default Track;
