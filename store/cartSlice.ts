import { CartItem } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
    cartItems: CartItem[];
}

const initialState: CartState = {
    cartItems: [],
}

// create const slice for cart
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload);
        }

    },
})

//export 
export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;