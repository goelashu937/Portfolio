// import './App.css';
import "./index.css";
import React from 'react';
import Home from "./routes/Home";
import Project from "./routes/Project";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Achievements from "./routes/Achievements";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/Project" element={<Project />} />
    <Route path="/Achievements" element={<Achievements />} />

   </Routes>
   </>
  );
}

export default App;
