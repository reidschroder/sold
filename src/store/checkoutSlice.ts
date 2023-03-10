import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    cart: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
     
    },
    incrementQuantity: (state, action) => {
      
    },
    decrementQuantity: (state, action) => {
    
    },
    removeProduct: (state, action) => {
     
    },
  },
});
export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeProduct,
} = cartSlice.actions;