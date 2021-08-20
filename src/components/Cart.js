import React from "react";

function Cart() {
  return (
    <div>
      <h3 className="mt-5 ms-4 mb-3">My Cart</h3>
      <div className="cart-container mx-4"></div>

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
