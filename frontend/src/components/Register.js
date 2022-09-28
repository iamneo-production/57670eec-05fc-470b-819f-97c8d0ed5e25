import React from "react";
import './Register.css';
import {useState} from 'react';
// import {toast} from "react-toastify";
import {Link} from 'react-router-dom';

// import axios from 'axios';


// const initalState={
//     username:"",
//     email:"",
//     number:"",
//     password:""
    
// };


export default function Register(){

    // const [state,setState]=useState(initalState);

    // const {username,email,number,password}=state;


    const [namee,setName]=useState('');
    const [emaill,setEmaill]=useState('');
    const [phonee,setPhone]=useState('');
    const [passwordd,setPassword]=useState('');



    const handleSubmit=(e)=>{
        e.preventDefalut()
        console.log("hiii");

        const student = {namee,emaill,phonee,passwordd};
        
        fetch("https://8080-aaafefebbaeaabefccccaefaeaadaab.examlyiopb.examly.io/user",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(student)
        }).then(()=>{
            console.log("successsfull");
        });



            // axios.post(`https://8080-aaafefebbaeaabefccccaefaeaadaab.examlyiopb.examly.io/user`,{
            //     "username":username,
            //     "email":email,
            //     "number":number,
            //     "password":password
            // }).then(()=>{setState({username:"",email:"",number:"",password:""})
            // }).catch((err)=>console.log("error"));
            // toast.success("User register successfully");
            // console.log("successfull");
            
            
        
    }


    return (
        <div className="login-form-wrap">

            <form className="login-form">
                <h1>REGISTER PAGE</h1>
                <p>
                    <input onChange={(e)=>setName(e.target.value)} type="text" name="username" placeholder="username" required/>
                </p>
                <p>
                    <input onChange={(e)=>setEmaill(e.target.value)} type="email" name="email" placeholder="Email" required/>
                </p>
                <p>
                    <input onChange={(e)=>setPhone(e.target.value)} type="phone" name="phone" placeholder="Enter number" required/>
                </p>

                <p>
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" name="password" placeholder="Password" required/>
                </p>

                <p>
                    <input type="submit" value="Register" onSubmit={handleSubmit}/>
                </p>

                <div className="create-account-wrap">
                <p>Already a member? <Link to="/user/login">Login Your Account</Link></p>
                </div>
              
            </form>
            
        </div>
    )
}