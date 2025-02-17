import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductsAPI1,
  fetchProductsAPI2,
} from "..//..//ProductSlice/smartStoreSlice"; // Adjust import path if needed

const SmartStoreOverview = () => {
  const dispatch = useDispatch();

  // Accessing data from Redux store
  const { itemsAPI1, itemsAPI2, statusAPI1, statusAPI2 } = useSelector(
    (state) => state.smartStore
  );

  useEffect(() => {
    // Dispatch actions to fetch data
    dispatch(fetchProductsAPI1());
    dispatch(fetchProductsAPI2());
  }, [dispatch]);

  // Log data for debugging
  useEffect(() => {
    console.log("API1 items:", itemsAPI1);
    console.log("API2 items:", itemsAPI2);
  }, [itemsAPI1, itemsAPI2]);

  // Helper function to format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <div className="p-6 space-y-12">
      {/* Section for API 1 */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800">
          Products from API 1
        </h2>
        {statusAPI1 === "loading" ? (
          <p className="text-gray-600">Loading products from API 1...</p>
        ) : statusAPI1 === "failed" ? (
          <p className="text-red-500">Error loading products from API 1</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {itemsAPI1.length > 0 ? (
              itemsAPI1.map((product) => (
                <div
                  key={product.product_id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all"
                >
                  <img
                    src={`http://localhost:8000${product.image}`} // Ensure the image URL is correct
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {product.product_category}
                    </p>
                    <p className="text-sm text-gray-500">
                      {product.product_info}
                    </p>

                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Price:</span>
                        <span className="font-semibold text-gray-900">
                          {formatCurrency(product.price)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sales:</span>
                        <span className="font-semibold text-gray-900">
                          {product.sales}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Amount:</span>
                        <span className="font-semibold text-gray-900">
                          {formatCurrency(product.amount)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No products found from API 1</p>
            )}
          </div>
        )}
      </div>

      {/* Section for API 2 */}
      <div>
        <h2 className="text-3xl font-semibold text-gray-800">
          Products from API 2
        </h2>
        {statusAPI2 === "loading" ? (
          <p className="text-gray-600">Loading products from API 2...</p>
        ) : statusAPI2 === "failed" ? (
          <p className="text-red-500">Error loading products from API 2</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {itemsAPI2.length > 0 ? (
              itemsAPI2.map((product) => (
                <div
                  key={product.product_id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all"
                >
                  <img
                    src={`http://localhost:8000${product.image}`} // Ensure the image URL is correct
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {product.product_category}
                    </p>
                    <p className="text-sm text-gray-500">
                      {product.product_info}
                    </p>

                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Price:</span>
                        <span className="font-semibold text-gray-900">
                          {formatCurrency(product.price)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sales:</span>
                        <span className="font-semibold text-gray-900">
                          {product.sales}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Amount:</span>
                        <span className="font-semibold text-gray-900">
                          {formatCurrency(product.amount)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No products found from API 2</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SmartStoreOverview;
