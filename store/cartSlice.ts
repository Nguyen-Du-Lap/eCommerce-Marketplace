import { CartItem } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
    cartItems: CartItem[];
}

const initialState = {
    cartItems: [],

}

// create const slice for cart
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // add item to cart
    },
})

//export 
export default cartSlice.reducer;
export const {} = cartSlice.actions;