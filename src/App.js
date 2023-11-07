import React from 'react';
import './App.css';
import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
      <>
        <Routes>
         <Route path = "/" element = { <Home/> }/>
          <Route path = "*" element = { <Navigate />}/>
        </Routes>
        </>
  );
}

export default App;
