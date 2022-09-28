import React from "react"
import './App.css';
import Login from './Components/login';
import Navgate from './Components/navgate';
import Register from'./Components/Register';
import Admin from './Components/Admin';
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App(){
  return (
       <BrowserRouter>
         <div>
           <Navgate/>
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
