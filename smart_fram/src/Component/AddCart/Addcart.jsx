import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../../ProductSlice/CartSlice";

function AddCart() {
  const { cartItems, totalItems, totalPrice } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleBuy = () => {
    alert("Purchase successful!");
    dispatch(clearCart());
  };

  const totalPriceFormatted = Number(totalPrice).toFixed(2);

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-semibold text-center">Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center mt-6">Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => {
              return (
                <li
                  key={item.id || index} // Ensure the key is unique
                  className="flex justify-between items-center p-4 border-b"
                >
                  <div>
                    <img
                      src={`http://127.0.0.1:8000${item.image}`}
                      alt={item.name}
                      className="w-16 h-16 object-cover"
                    />
                    <p className="text-lg">{item.name}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-gray-600">Price: ${item.price}</p>
                    <p className="text-sm text-gray-500">
                      Rating: {item.rating}
                    </p>
                    <p className="text-sm text-gray-500">
                      Product Type: {item.productType}{" "}
                      {/* Display product type */}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="text-right mt-6">
            <p>Total Items: {totalItems}</p>
            <p>Total Price: ${totalPriceFormatted}</p>
            <button
              onClick={handleBuy}
              className="mt-4 bg-green-500 text-white px-6 py-2 rounded"
            >
              Buy Now
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default AddCart;
