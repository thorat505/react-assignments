import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Product } from "../../types/Product"

interface CartItem extends Product {
  quantity: number
}

interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addToCart: (state, action: PayloadAction<Product>) => {

      const existing = state.items.find(
        item => item.id === action.payload.id
      )

      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1
        })
      }
    }

  }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer