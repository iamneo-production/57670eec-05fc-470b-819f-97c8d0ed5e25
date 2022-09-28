import React from 'react';
import './App.css';
import Login from './components/Login';
import Navgate from './components/navgate';
import Register from './components/Register';
import Admin from './components/Admin';
import {BrowserRouter,Routes,Route} from "react-router-dom";



function App() {
  return (


      <BrowserRouter>
        <div>
          <Navgate/>
          <Routes>
            <Route index path="/" element={<Login/>}/>
            <Route path="/Admin/login" element={<Admin/>}/>
            <Route exact path="/user/login" element={<Login/>}/>
            <Route path="/user/singup" element={<Register/>}/>
          </Routes>

        </div>
      
      </BrowserRouter>

      
  );
}

export default App;


