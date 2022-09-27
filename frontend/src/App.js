import React from 'react';
import './App.css';
import Login from './components/Login';
import Navigate from './components/navigate';
import Register from './components/Register';
import Admin from './components/Admin';
import {BrowserRouter,Routes,Route} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div>
                <Navigate/>
                <Routes>
                    <Route path="/Admin/login" element={<Admin/>}/>
                    <Route exact path="/user/login" element={<Login/>}/>
                    <Route path="/user/signup" element={<Register/>}/>
                </Routes>

            </div>
        </BrowserRouter>
    );
}

export default App;