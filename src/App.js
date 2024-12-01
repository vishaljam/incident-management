import logo from './logo.svg';
import './App.css';

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import IncidentImage from "./pages/IncidentImage";
import IncidentLocation from "./pages/IncidentLocation";
import IncidentType from "./pages/IncidentType";
import IncidentDetails from "./pages/IncidentDetails";
import IncidentDetails1 from "./pages/IncidentDetails1";
import IncidentDetails2 from "./pages/IncidentDetails2";

function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/incident-image" element={<IncidentImage />} />
      <Route path="/incident-location" element={<IncidentLocation />} />
      <Route path="/incident-type" element={<IncidentType />} />
      <Route path="/incident-details" element={<IncidentDetails />} />
      <Route path="/incident-details1" element={<IncidentDetails1 />} />
      <Route path="/incident-details2" element={<IncidentDetails2 />} />
    </Routes>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
