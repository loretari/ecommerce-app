import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/Navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import ProductPage from "./Pages/ProductPage";
import Shop from "./Pages/Shop";




function App() {
  return (
      <>
          <NavBar/>
          <Routes>
              <Route index path= "/" element={<Home />} />
              <Route path= "shop" element={<Shop/>} />
              <Route path= "/shop/:id" element={<ProductPage/>}/>
          </Routes>



        </>
  );
}

export default App;
