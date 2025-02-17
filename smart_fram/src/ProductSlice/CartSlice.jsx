import { createSlice } from "@reduxjs/toolkit";

// Helper function to get cart from localStorage
const getCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("cartItems");
  return storedCart ? JSON.parse(storedCart) : [];
};

const initialState = {
  cartItems: getCartFromLocalStorage(),
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((x) => x.id === item.id);

      if (existingItem) {
        // Update quantity if item already exists
        existingItem.quantity += 1;
      } else {
        // Add new item with quantity 1
        state.cartItems.push({ ...item, quantity: 1 });
      }

      // Save to localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      // Recalculate total items and price
      state.totalItems = state.cartItems.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      state.totalPrice = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((x) => x.id !== id);

      // Save to localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      // Recalculate total items and price
      state.totalItems = state.cartItems.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      state.totalPrice = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem("cartItems"); // Clear cart from localStorage
      state.totalItems = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
