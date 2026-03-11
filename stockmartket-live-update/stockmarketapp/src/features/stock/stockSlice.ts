import { createSlice } from "@reduxjs/toolkit";
import { generateRandomStockData } from "../../utils/randomGenerator";

interface StockState {
  s1: number[];
  s2: number[];
}

const initialState: StockState = {
  s1: generateRandomStockData().map(d => d.value),
  s2: generateRandomStockData().map(d => d.value)
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    refreshData: (state) => {
      state.s1 = generateRandomStockData().map(d => d.value);
      state.s2 = generateRandomStockData().map(d => d.value);
    }
  }
});

export const { refreshData } = stockSlice.actions;
export default stockSlice.reducer;