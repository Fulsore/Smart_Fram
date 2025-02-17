import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
  itemsAPI1: [],
  itemsAPI2: [],
  statusAPI1: "idle",
  statusAPI2: "idle",
  error: null,
};

// Fetch API1 data
export const fetchProductsAPI1 = createAsyncThunk(
  "smartStore/fetchProductsAPI1",
  async () => {
    const response = await fetch("http://127.0.0.1:8000/api/products/"); // Replace with your API URL
    return response.json();
  }
);

// Fetch API2 data
export const fetchProductsAPI2 = createAsyncThunk(
  "smartStore/fetchProductsAPI2",
  async () => {
    const response = await fetch(
      "http://127.0.0.1:8000/api/products/vegetables/"
    ); // Replace with your API URL
    return response.json();
  }
);

const smartStoreSlice = createSlice({
  name: "smartStore",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAPI1.pending, (state) => {
        state.statusAPI1 = "loading";
      })
      .addCase(fetchProductsAPI1.fulfilled, (state, action) => {
        console.log("API1 Response:", action.payload); // Log API1 response
        state.statusAPI1 = "succeeded";
        // Access the 'Data' property from the response
        state.itemsAPI1 = Array.isArray(action.payload.Data)
          ? action.payload.Data
          : action.payload.Data.products || [];
      })
      .addCase(fetchProductsAPI1.rejected, (state, action) => {
        state.statusAPI1 = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchProductsAPI2.pending, (state) => {
        state.statusAPI2 = "loading";
      })
      .addCase(fetchProductsAPI2.fulfilled, (state, action) => {
        console.log("API2 Response:", action.payload); // Log API2 response
        state.statusAPI2 = "succeeded";
        // Access the 'Data' property from the response
        state.itemsAPI2 = Array.isArray(action.payload.Data)
          ? action.payload.Data
          : action.payload.Data.products || [];
      })
      .addCase(fetchProductsAPI2.rejected, (state, action) => {
        state.statusAPI2 = "failed";
        state.error = action.error.message;
      });
  },
});

export default smartStoreSlice.reducer;
