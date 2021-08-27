import React from "react";
import { useSelector } from "react-redux";
import { getIcon } from "../helpers/getIcon";

function Cart() {
  const store = useSelector((state) => state.store);
  const cartItems = store.cart;

  const dimensionConversion = (dim) => {
    return dim ? `${parseInt(dim.replace("px", "")) * 0.6}px` : "132px";
  };

  const plus = (id) => {
    if (document.getElementById(id)) {
      const value = document.getElementById(id).value;
      document.getElementById(id).value = parseInt(value) + 1;
    }
  };

  const minus = (id) => {
    if (document.getElementById(id)) {
      const value = document.getElementById(id).value;
      if (parseInt(value) - 1 > 0) {
        document.getElementById(id).value = parseInt(value) - 1;
      }
    }
  };

  // this is a test
  return (
    <div>
      <h3 className="mt-5 ms-4 mb-3">My Cart</h3>
      <div className="mx-4 container">
        {cartItems.map((c, i) => (
          <div
            className={`row cart-container ${
              i === 0 ? "border-tb" : "border-b"
            }`}
            key={`${c.item.name} + ${c.item.color}`}
          >
            <div className="cart-left col-2">
              <div className="cart-img-box">
                <img
                  className={`icon ${c.item.color} img-responsive`}
                  src={getIcon(c.item.icon)}
                  alt={c.item.name}
                  width={dimensionConversion(c.item.gridSize[1])}
                  height={dimensionConversion(c.item.gridSize[0])}
                ></img>
              </div>
            </div>

            <div className="cart-right pt-4 col-10">
              <h5>{c.item.name}</h5>
              <p>{c.item.price}</p>

              <div className="quantity-input">
                <button
                  className="minus"
                  onClick={() => minus(`quantityInput${i}`)}
                >
                  -
                </button>
                <input
                  id={`quantityInput${i}`}
                  type="text"
                  value={c.quantity || 1}
                  onChange={() => {}}
                />
                <button
                  className="plus"
                  onClick={() => plus(`quantityInput${i}`)}
                >
                  +
                </button>
              </div>

              <div className="cart-utils">
                <button type="button" className="btn btn-link">
                  Remove
                </button>
                <button type="button" className="btn btn-link">
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-4 ">
        <div className="mt-4 checkout-review-container">
          <p className="pt-3 px-4">
            <span className="me-4">Item Subtotal:</span> <span>$100</span>
          </p>
          <p className="px-4">
            <span className="me-4">Estimated Shipping:</span> <span>$10</span>
          </p>
          <p className="px-4 et-font">
            <span className="me-4 ">Estimated Total:</span> <span>$110</span>
          </p>
        </div>
        <button
          className="mt-4 checkout-btn btn btn-dark"
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
