import {configureStore} from "@reduxjs/toolkit";
import {cartMiddleware, cartSlice} from "./cartSlice";


export const store = configureStore({
    reducer: {
        cart: cartSlice,
    },
    middleware: (getDefaultMiddleware =>
    getDefaultMiddleware().concat(cartMiddleware))
})