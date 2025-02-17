import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../ProductSlice/SeedSlice";
import { addToCart } from "../../ProductSlice/CartSlice"; // Ensure this import exists
import { useNavigate } from "react-router-dom"; // Import navigate hook

function Seed() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate hook
  const { products, status, error } = useSelector((state) => state.seed);

  const handleAddToCart = (product) => {
    // Add productType to indicate it's from seeds
    const productWithType = { ...product, productType: "Seed" };
    dispatch(addToCart(productWithType)); // Dispatch action to add to cart with productType
    navigate("/cart"); // Redirect to the Cart page after adding
  };

  useEffect(() => {
    dispatch(fetchProducts()); // Fetch products on component mount
  }, [dispatch]);

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">
        Fresh Seeds
      </h1>

      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && products.length === 0 && (
        <p>No products found</p>
      )}
      {status === "succeeded" && products.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 shadow-lg">
              <img
                src={`http://127.0.0.1:8000${product.image}`}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p>{product.product_info}</p>
              <p className="text-lg font-semibold">${product.price}</p>

              {/* Add to Cart Button */}
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

export default Seed;
