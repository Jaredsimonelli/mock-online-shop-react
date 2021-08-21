import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const store = useSelector((state) => state.store);
  const cartItems = store.cart;
  console.log(cartItems);

  return (
    <div>
      <h3 className="mt-5 ms-4 mb-3">My Cart</h3>
      <div className="cart-container mx-4">
        {cartItems.map((item) => (
          <p>{item.name}</p>
        ))}
      </div>

      <div className="mx-4 ">
        <button
          className="mt-3 checkout-btn btn btn-dark"
          type="btn"
          value="Checkout"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
