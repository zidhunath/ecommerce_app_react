
import { createSlice } from "@reduxjs/toolkit";

import {add_Items_ToCart,incremnt_Quantity,decrement_Quantity,remove_Item} from '../methods/cartMethods'

const INITIAL_STATE = {
  cartList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state = INITIAL_STATE, action) => {
     
      add_Items_ToCart(state,action);
     
    },
    incrementQuantity: (state, action) => {
      incremnt_Quantity(state, action);
    },
    decrementQuantity: (state, action) => {
      decrement_Quantity(state, action);
    },
    removeItem: (state, action) => {
      remove_Item(state, action);
    },
  },
});

export const { incrementQuantity, addToCart, decrementQuantity, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;
