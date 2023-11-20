import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/Navbar/NavBar";
import Home from './Pages/Home';
import ProductPage from "./Pages/ProductPage";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer/Footer";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Route, Routes} from "react-router";
import News from "./Pages/News";





function App() {
  return (
      <>

              <ToastContainer
                  position="top-right"
                  autoClose={1000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light" />
                  <NavBar/>
          <Routes>
              <Route index path= "/" element={<Home />} />
              <Route path= "shop" element={<Shop/>} />
              <Route path= "/news" element={<News/>}/>
              <Route path= "/shop/:id" element={<ProductPage/>}/>
              <Route path= "/cart" element={<Cart/>} />
          </Routes>
              <Footer/>

        </>
  );
}

export default App;
