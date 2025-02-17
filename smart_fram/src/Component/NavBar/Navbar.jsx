import React from "react";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa"; // Import icons
import { Link } from "react-router-dom"; // Import Link for routing
import { useSelector } from "react-redux"; // Import useSelector to access Redux state
import FulsoreLogo from "../../assets/fulsorelogo.jpeg";

function Navbar() {
  const { totalItems } = useSelector((state) => state.cart); // Access cart items from Redux store

  return (
    <header className="bg-white shadow-md dark:bg-gray-900">
      {/* Upper Navbar */}
      <div className="bg-gradient-to-r from-green-400 via-green-300 to-green-400 py-2 px-6">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center gap-3 text-2xl font-bold text-gray-800 dark:text-gray-100"
          >
            <img
              className="w-12 h-12 rounded-full"
              src={FulsoreLogo}
              alt="Fulsore Logo"
            />
            Fulsore
          </Link>

          {/* Brand Title */}
          <h1 className="text-2xl md:text-4xl font-serif font-bold text-stone-950 dark:text-gray-100">
            SMART FARM
          </h1>

          {/* Search Bar and Icons Section */}
          <div className="flex items-center gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-[200px] md:w-[300px] px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              />
            </div>
            <div>
              {/* SmartStore Button */}
              <Link to="/SmartStoreOverview">
                <button className="bg-orange-300 text-white px-4 py-2 rounded-full hover:bg-gray-400 transition duration-300">
                  Smart Store
                </button>
              </Link>
            </div>

            {/* Cart Icon */}
            <Link
              to="/cart"
              className="relative text-gray-800 dark:text-gray-100 text-xl hover:text-green-500 transition duration-300"
              title="Cart"
            >
              <FaShoppingCart />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Account Icon */}
            <Link
              to="/account"
              className="text-gray-800 dark:text-gray-100 text-xl hover:text-green-500 transition duration-300"
              title="Account"
            >
              <FaUserCircle />
            </Link>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <nav className="bg-gray-100 dark:bg-gray-800 py-3 shadow-inner">
        <div className="container mx-auto">
          <ul className="flex justify-center gap-8 text-sm md:text-base font-medium text-gray-800 dark:text-gray-200">
            <li>
              <Link
                to="/Home"
                className="hover:text-green-500 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className="hover:text-green-500 transition duration-300"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-green-500 transition duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-green-500 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
