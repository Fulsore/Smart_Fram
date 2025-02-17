import React from "react";
import Vegetable from "../../assets/Vegatables.jpg";
import Coffee from "../../assets/Coffee.jpg";
import Fruit from "../../assets/Fruite.jpg";
import Masalas from "../../assets/Masalas.jpg";
import Seeds from "../../assets/Seeds.jpg";
import Dairy from "../../assets/Dairy.jpg";

function Cart() {
  const products = [
    {
      name: "Vegetables",
      img: Vegetable,
      details: "Fresh vegetables directly from the farm.",
      rating: 4.5,
      price: "$15.00",
    },
    {
      name: "Fruits",
      img: Fruit,
      details: "Seasonal fruits picked at their prime.",
      rating: 4.7,
      price: "$20.00",
    },
    {
      name: "Dairy",
      img: Dairy,
      details: "Organic milk, cheese, and more.",
      rating: 4.8,
      price: "$12.00",
    },
    {
      name: "Seeds",
      img: Seeds,
      details: "High-quality seeds for better farming.",
      rating: 4.3,
      price: "$8.00",
    },
    {
      name: "Masalas",
      img: Masalas,
      details: "Traditional spices for authentic flavors.",
      rating: 4.6,
      price: "$10.00",
    },
    {
      name: "Coffee",
      img: Coffee,
      details: "Premium coffee beans for a perfect brew.",
      rating: 4.9,
      price: "$25.00",
    },
  ];

  return (
    <div className="px-4 py-8">
      <h1 className="text-3xl font-extrabold text-center mb-8">Top Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            {/* Product Image */}
            <div className="w-full h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={product.img}
                alt={product.name}
              />
            </div>

            {/* Product Details */}
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-3">{product.details}</p>

              {/* Rating */}
              <div className="flex items-center mb-3">
                <span className="text-yellow-500 text-xl mr-2">★</span>
                <span className="text-gray-800">{product.rating}/5</span>
              </div>

              {/* Price */}
              <div className="text-xl font-semibold text-green-600">
                {product.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
