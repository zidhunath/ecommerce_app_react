import { createSlice } from "@reduxjs/toolkit";
import product_Data from "../data/product_Data.json";

const items = JSON.parse(localStorage.getItem("items")) || [];
const INITIAL_STATE = {
  cartList: items,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state = INITIAL_STATE, action) => {
      let targetId = action.payload.id;

      let productInLocalStorage = false;

      state.cartList.map((items) => {
        if (targetId == items.id) productInLocalStorage = true;
      });

      product_Data.filter((product) => {
        if (targetId == product.id && !productInLocalStorage) {
          product.quantity++;
          state.cartList.push(product);
        }
        localStorage.setItem("items", JSON.stringify(state.cartList));
      });
    },
    incrementQuantity: (state, action) => {
      let id = action.payload.id;
      state.cartList.map((product) => {
        if (product.id == id) {
          product.quantity++;

          localStorage.setItem("items", JSON.stringify(state.cartList));
        }
      });
    },
    decrementQuantity: (state, action) => {
      let selectedPrdtId = action.payload.id;
      state.cartList.map((items) => {
        if (selectedPrdtId == items.id) {
          if (items.quantity > 0) {
            items.quantity--;
            localStorage.setItem("items", JSON.stringify(state.cartList));
          }
          if (items.quantity == 0) {
            items.quantity = 1;
            localStorage.setItem("items", JSON.stringify(state.cartList));
          }
        }
      });
    },
    removeItem:(state,action)=>{
      let selectedItemId = action.payload.id;
      state.cartList.map((productItem, index) => {
        if (productItem.id == selectedItemId) {
          state.cartList.splice(index, 1);
          localStorage.setItem("items", JSON.stringify(state.cartList));
        }
      });
    }
  },
});

export const { incrementQuantity, addToCart, decrementQuantity,removeItem } = cartSlice.actions;
export default cartSlice.reducer;
