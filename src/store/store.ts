import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./userSlice";
import productsReducer from "./productSlice";
import { cartReducer } from "./checkoutSlice";


export const store = configureStore({
    reducer: {
        users: usersReducer,
        products: productsReducer,
        cart: cartReducer
    },
});