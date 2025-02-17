import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../ProductSlice/ProductsSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const handleAddToCart = (product) => {
    // Add product to cart logic here
    navigate("/cart");
  };

  return (
    <div>
      <h1>Home Page</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>{error}</p>}
      <div className="product-list">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product, index) => (
            <div key={product.id || index} className="product-card">
              {/* Update image source to use a full URL */}
              <img
                src={`http://localhost:8000${product.image}`} // Assuming the backend serves the image
                alt={product.name}
              />
              <h2>{product.name}</h2>
              <p>{product.price}</p>
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
