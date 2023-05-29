import { configureStore } from '@reduxjs/toolkit'
import cartReducere from "./Cart"


export const store = configureStore({
  reducer: {    
    cart:cartReducere,
  },
})