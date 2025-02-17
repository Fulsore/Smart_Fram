import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Example of fetching products (you can adjust the API URL)
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("http://localhost:8000/api/products/");
    const data = await response.json();
    console.log("API response data:", data);// Log the response to inspect it
    return data.Data || []; // Update to access the 'Data' key
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [], // Ensure it's an empty array initially
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload; // Ensure action.payload is an array
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
