import { useEffect } from "react";
import product_data from "../data/product_Data.json";
import { db } from "../db/db";

// const db_items = useLiveQuery(() => db.cartItems.toArray(), []);
const add_Items_ToCart = (state, action) => {
  let targetId = action.payload.id;
  let productInDB = false;

  db.cartItems.toArray().then((item) => {
    item.map((product)=>{
      if (targetId == product.id) productInDB = true;
    })
    
  });

  const existingProduct = product_data.find(
    (product) => product.id === targetId
  );

  if (existingProduct && !productInDB) {
    existingProduct.quantity++;
    state.cartList.push(existingProduct);
    db.cartItems.put(existingProduct, targetId);
  }
};
const incremnt_Quantity = (state, action) => {
  let id = action.payload.id;

  db.cartItems.toArray().then((item) => {
    item.map((product) => {
      if (product.id == id) {
        product.quantity++;
        db.cartItems.update(id, product);
      }
    });
  });
};
const decrement_Quantity = (state, action) => {
  let selectedPrdtId = action.payload.id;

  db.cartItems.toArray().then((items) => {
    
    items.map((product) => {
      if (selectedPrdtId == product.id) {
        if (product.quantity > 0) {
          product.quantity--;
          db.cartItems.update(selectedPrdtId, product);
        }
        if (product.quantity == 0) {
          product.quantity = 1;
          db.cartItems.update(selectedPrdtId, product);
        }
      }
    });
  });
};
const remove_Item = (state, action) => {
  let selectedItemId = action.payload.id;
  db.cartItems.delete(selectedItemId);
};
export { add_Items_ToCart, incremnt_Quantity, decrement_Quantity, remove_Item };