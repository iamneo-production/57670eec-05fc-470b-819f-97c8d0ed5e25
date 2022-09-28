import React from 'react';
import {Link} from 'react-router-dom';

const Track =()=>{
    return (
        <>
            <h1>Details Required</h1>
            <form >
                <input type="text"  placeholder="Enter Applicant Name" />
            </form>
            <form>
                <input type="text" placeholder="Enter Applicant Address" />
            </form>
            <form>
                <input type="phone" placeholder="Enter Applicant Mobile" />
            </form>
            <form>
                <input type="email" placeholder="Enter Applicant Email Id" />
            </form>
            <form>
                <input type="number" placeholder="Enter Applicant Aadhaar No" />
            </form>
            <form>
                <input type="number" placeholder="Enter Applicant PAN no" />
            </form>
            <form>
                <input type="number" placeholder="Enter Applicant Salary" />
            </form>
            <form>
                <input type="number" placeholder="Enter Loan Amount Required" />
            </form>
            <form>
                <input type="phone" placeholder="Enter Loan repayment months" />
            </form>

            <div className='col '>
                <Link to="/track">
                <button type="button" className="btn">Next</button>
                </Link>
            </div>

       </>
    )
}

export default Track;
