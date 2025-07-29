 import React from 'react';
 import { NavLink, Route, Routes } from 'react-router-dom';
 import Add from"./Add";
 import { Findall } from "./Findall";
 import { Find } from "./Find"; 
 import {Delete} from "./Delete";
 import Update1 from './Update'; 
 import '../style/App.css';


function App() {
  return (
    <div className="main-container">
      <h2>Employee Management System</h2>
      <nav>
        <NavLink to="/Add" style={{margin: "0px 20px"}}>Add</NavLink>
        <NavLink to="/Update1" style={{margin: "0px 20px"}}>Update</NavLink>
        <NavLink to="/Delete" style={{margin: "0px 20px"}}>Delete</NavLink>
        <NavLink to="/Find" style={{margin: "0px 20px"}}>Find</NavLink>
        <NavLink to="/Findall" style={{margin: "0px 20px"}}>Findall</NavLink>
      </nav>

      <Routes>
        <Route path="/Add" element={<Add />} />
        <Route path="/Update1" element={<Update1 />} />
        <Route path="/Delete" element={<Delete />} />
        <Route path="/Find" element={<Find />} />
        <Route path="/Findall" element={<Findall/>} />

      </Routes>
      <footer>
        <p>© 2025 Employee Management System All right reserved</p>
      </footer>
       
    </div>
  );
}

export default App;