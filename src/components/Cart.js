import React from "react";
import { useSelector } from "react-redux";
import { getIcon } from "../helpers/getIcon";

function Cart() {
  const store = useSelector((state) => state.store);
  const cartItems = store.cart;

  const dimensionConversion = (dim) => {
    return dim ? `${parseInt(dim.replace("px", "")) * 0.6}px` : "132px";
  };

  return (
    <div>
      <h3 className="mt-5 ms-4 mb-3">My Cart</h3>
      <div className="mx-4">
        {cartItems.map((c, i) => (
          <div
            className={`cart-container ${i === 0 ? "border-tb" : "border-b"}`}
            key={`${c.item.name} + ${c.item.color}`}
          >
            <div className="cart-left">
              <div className="cart-img-box">
                <img
                  className={`icon ${c.item.color}`}
                  src={getIcon(c.item.icon)}
                  alt={c.item.name}
                  width={dimensionConversion(c.item.gridSize[1])}
                  height={dimensionConversion(c.item.gridSize[0])}
                ></img>
              </div>
            </div>

            <div className="cart-right pt-4">
              <h5>{c.item.name}</h5>
              <p>{c.item.price}</p>
            </div>
          </div>
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
