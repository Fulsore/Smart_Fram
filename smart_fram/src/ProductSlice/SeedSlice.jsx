import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "seed/fetchProducts",
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/products/seeds/"
      );
      console.log("API Response:", response.data);
      return response.data.Data; // Return only the 'Data' array
    } catch (error) {
      throw new Error("Failed to fetch products");
    }
  }
);

const SeedSlice = createSlice({
  name: "seed",
  initialState: {
    products: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload; // Products directly from API
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default SeedSlice.reducer;
