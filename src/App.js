import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/Navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import ProductPage from "./Pages/ProductPage";




function App() {
  return (
      <>
          <NavBar/>
          <Routes>
              <Route index path= "/" element={<Home />} />
              <Route path= "/product/:id" element={ProductPage}/>
          </Routes>



        </>
  );
}

export default App;
