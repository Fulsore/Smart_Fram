import React from "react";
import Vegetable from "../../assets/Vegatables.jpg";
import Coffee from "../../assets/Coffee.jpg";
import Fruit from "../../assets/Fruite.jpg";
import Masalas from "../../assets/Masalas.jpg";
import Seeds from "../../assets/Seeds.jpg";
import Dairy from "../../assets/Dairy.jpg";
import Cart from "../Cart/Cart"; // Adjusted import
import { Link } from "react-router-dom";

function Menu() {
  return (
    <>
      <div>
        <div className="mt-5">
          <div className="font-extrabold">
            <h1 className="text-4xl">Menu</h1>
          </div>
          <div>
            <span className="text-lg">
              Choose the best product from your favorite farmer
            </span>
          </div>
        </div>

        {/* Product Images Section */}
        <div className="flex justify-center flex-wrap gap-8 mt-10">
          {/* Vegetable */}
          <Link to="/vegetable">
            <div className="border-black hover:bg-green-300 rounded-xl p-4 text-center transition duration-300">
              <img
                className="h-[150px] w-[150px] object-cover rounded-md mx-auto"
                src={Vegetable}
                alt="Vegetable"
              />
              <div className="mt-2 font-medium text-xl">Vegetables</div>
            </div>
          </Link>

          {/* Fruit */}
          <Link to="/fruits">
            <div className="border-black hover:bg-green-300 rounded-xl p-4 text-center transition duration-300">
              <img
                className="h-[150px] w-[150px] object-cover rounded-md mx-auto"
                src={Fruit}
                alt="Fruit"
              />
              <div className="mt-2 font-medium text-xl">Fruits</div>
            </div>
          </Link>

          {/* Dairy */}
          <Link to="/dairy">
            <div className="border-black hover:bg-green-300 rounded-xl p-4 text-center transition duration-300">
              <img
                className="h-[150px] w-[150px] object-cover rounded-md mx-auto"
                src={Dairy}
                alt="Dairy"
              />
              <div className="mt-2 font-medium text-xl">Dairy</div>
            </div>
          </Link>

          {/* Seeds */}
          <Link to="/seeds">
            <div className="border-black hover:bg-green-300 rounded-xl p-4 text-center transition duration-300">
              <img
                className="h-[150px] w-[150px] object-cover rounded-md mx-auto"
                src={Seeds}
                alt="Seeds"
              />
              <div className="mt-2 font-medium text-xl">Seeds</div>
            </div>
          </Link>

          {/* Masalas */}
          <Link to="/masalas">
            <div className="border-black hover:bg-green-300 rounded-xl p-4 text-center transition duration-300">
              <img
                className="h-[150px] w-[150px] object-cover rounded-md mx-auto"
                src={Masalas}
                alt="Masalas"
              />
              <div className="mt-2 font-medium text-xl">Masalas</div>
            </div>
          </Link>

          {/* Coffee */}
          <Link to="/coffee">
            <div className="border-black hover:bg-green-300 rounded-xl p-4 text-center transition duration-300">
              <img
                className="h-[150px] w-[150px] object-cover rounded-md mx-auto"
                src={Coffee}
                alt="Coffee"
              />
              <div className="mt-2 font-medium text-xl">Coffee</div>
            </div>
          </Link>
        </div>
      </div>
      <Cart />
    </>
  );
}

export default Menu;
