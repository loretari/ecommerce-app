import { createSlice } from "@reduxjs/toolkit";

const storedCartList =
    localStorage.getItem("cartList") !== null
    ? JSON.parse(localStorage.getItem("cartList"))
    : [];

const initialState = {
    cartList: storedCartList,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const productToAdd = action.payload.product;
            const quantity = action.payload.num;
            const productExit = state.cartList.find((item) =>
                item.id === productToAdd.id);
            if (productExit) {
                state.cartList = state.cartList.map((item) =>
                    item.id === action.payload.product.id
                    ? {...productExit, qty: productExit.qty + action.payload.num}
                    : item
                );
            } else {
                state.cartList.push({ ...productToAdd, qty: quantity})
            }
        }
    }
})

export const { addToCart } = cartSlice.actions;

export const cartMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    if (action.type?.startsWith("cart")) {
        const cartList = store.getState().cart.cartList;
        localStorage.setItem("cartList", JSON.stringify(cartList))
    }
    return result
}

export default cartSlice.reducer;
