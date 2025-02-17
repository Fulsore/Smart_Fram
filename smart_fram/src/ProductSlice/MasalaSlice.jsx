import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch products from API
export const fetchProducts = createAsyncThunk(
  "vegetable/fetchProducts",
  async () => {
    const response = await axios.get(
      " http://127.0.0.1:8000/api/products/masalas/"
    );
    return response.data; // Ensure the API response structure matches
  }
);

const MasalaSlice = createSlice({
  name: "masala",
  initialState: {
    products: [],
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload.Data; // Adjust 'Data' to match your API response
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default MasalaSlice.reducer;
