import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../ProductSlice/vegetableSlice";
import { addToCart } from "../../ProductSlice/CartSlice";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Vegetables() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate
  const { products, status, error } = useSelector((state) => state.vegetable);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    // Add productType to indicate it's from vegetables
    const productWithType = { ...product, productType: "Vegetable" };
    dispatch(addToCart(productWithType)); // Add to cart with productType
    navigate("/cart"); // Redirect to Cart page
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">
        Fresh Vegetables
      </h1>

      {status === "loading" && (
        <p className="text-center text-gray-500">Loading...</p>
      )}
      {status === "failed" && (
        <p className="text-center text-red-500">{error}</p>
      )}
      {status === "succeeded" && products.length === 0 && (
        <p className="text-center text-gray-500">No products found</p>
      )}

      {status === "succeeded" && products.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={`http://localhost:8000${product.image}`}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-lg text-gray-600">{product.product_info}</p>
                <p className="text-2xl font-bold text-gray-800">{`$${product.price}`}</p>
                <p className="text-sm text-gray-500">
                  Rating: {product.rating}
                </p>
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Vegetables;
