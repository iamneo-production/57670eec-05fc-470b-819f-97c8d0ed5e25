import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Track from "./Components/Navbar/Track";
import './App.css';
import "./Components/styles/main.css";
import Navbar from "./Components/Navbar/index";
function App(){
  return (
   <BrowserRouter>

        <header>
           <h1> Loan Tracker </h1>
           <nav>
           <a href="/#">Apply loan</a>
           <a href="/#">Loan Status</a>
           <a href="/#">Profile</a>
           <a href="/#">Logout</a>
           </nav>
       </header>
      
      
      <Routes>
        <Route path="/" element={<Navbar/>}/>
        <Route path="/track" element={<Track/>}  />
      </Routes>

    </BrowserRouter>

  );
};
export default App;