import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/Navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';




function App() {
  return (
      <>
          <NavBar/>
          <Routes>
              <Route index path= "/" element={<Home />} />

          </Routes>



        </>
  );
}

export default App;
