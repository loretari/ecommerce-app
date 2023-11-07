import React from 'react';
import './App.css';
import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Products from "./pages/Products";
import Layout from "./pages/Layout";


function App() {
  return (
      <>
        <Routes>
         <Route path= "/" element={ <Layout/> }>
            <Route index element = { <Home/> }/>
            <Route path="/categories/:id" element={<Products />} />
            <Route path = "*" element = { <Navigate to= "/"/>}/>
         </Route>
        </Routes>
        </>
  );
}

export default App;
