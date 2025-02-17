import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/store.jsx";
import Navbar from "./Component/NavBar/Navbar.jsx";
import Home from "./Component/Home/Home.jsx";
import Dashboard from "./Component/Dashboard.jsx"; // The main dashboard component
import Menu from "./Component/Menu/Menu.jsx";
import SmartStoreOverview from "./pages/Smartstore/SmartStoreOverview.jsx";
import Vegetables from "./pages/product/Vegetable.jsx";
import Seed from "./pages/product/Seed.jsx";
import Fruit from "./pages/product/Fruit.jsx";
import Coffee from "./pages/product/Coffee.jsx";
import Dairy from "./pages/product/Dairy.jsx";
import Masala from "./pages/product/Masala.jsx";
import AddCart from "./Component/AddCart/Addcart.jsx";
import Register from "./Authentication/Register.jsx";
import Login from "./Authentication/Login.jsx";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/smartstoreoverview" element={<SmartStoreOverview />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/vegetable" element={<Vegetables />} />
          <Route path="/seeds" element={<Seed />} />
          <Route path="/fruits" element={<Fruit />} />
          <Route path="/coffee" element={<Coffee />} />
          <Route path="/dairy" element={<Dairy />} />
          <Route path="/masalas" element={<Masala />} />
          <Route path="/cart" element={<AddCart />} />
          <Route path="/register" element={<Register />} /> {/* Only one /register route */}
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
