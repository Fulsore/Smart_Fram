// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../ProductSlice/ProductsSlice";
import smartStoreReducer from "../ProductSlice/smartStoreSlice"; // Adjust the import path as needed
import Vegetables from "..//ProductSlice/vegetableSlice";
import coffee from "../ProductSlice/CoffeeSlice";
import seed from "../ProductSlice/SeedSlice";
import fruitReducer from "../ProductSlice/FruitSlice";
import masala from "../ProductSlice/MasalaSlice";
import dairy from "../ProductSlice/DairySlice";
import cart from "../ProductSlice/CartSlice";
import authReducer from "..//../src/Authentication/AuthSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    smartStore: smartStoreReducer,
    vegetable: Vegetables,
    coffee: coffee,
    masala: masala,
    dairy: dairy,
    fruit: fruitReducer,
    seed: seed,
    cart: cart,
    auth: authReducer,
  },
});

export default store;
