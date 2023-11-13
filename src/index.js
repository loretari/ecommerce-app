import React from 'react';
import App from './App';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './index.css';
import Provider from "react-redux/es/components/Provider";
import {store} from "./Store/store";


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
<React.StrictMode>
    <Provider store={store} >
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>
</React.StrictMode>


);


