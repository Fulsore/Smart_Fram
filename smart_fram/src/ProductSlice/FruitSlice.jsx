import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch products from API
export const fetchProducts = createAsyncThunk(
  "fruit/fetchProducts", // Action type
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/products/fruits"
      );
      console.log(response.data); // Debugging API response
      return response.data; // The payload contains a `Data` property
    } catch (error) {
      throw new Error("Failed to fetch products");
    }
  }
);

const FruitSlice = createSlice({
  name: "fruit",
  initialState: {
    products: [], // Array to store fetched products
    status: "idle", // idle | loading | succeeded | failed
    error: null, // For handling errors
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload.Data; // Access `Data` key to get the array
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default FruitSlice.reducer;
