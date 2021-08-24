import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { addToCart, cartMsgUpdate } from "../redux/actions";
import { getIcon } from "../helpers/getIcon";

function Item() {
  const store = useSelector((state) => state.store);
  const dispatch = useDispatch();

  const { id } = useParams();
  const { itemType } = useParams();

  const item = store.allItems.find(
    (item) => item.id === id && item.type === itemType
  );

  const plus = () => {
    if (document.getElementById("quantityInput")) {
      const value = document.getElementById("quantityInput").value;
      document.getElementById("quantityInput").value = parseInt(value) + 1;
    }
  };

  const minus = () => {
    if (document.getElementById("quantityInput")) {
      const value = document.getElementById("quantityInput").value;
      if (parseInt(value) - 1 > 0) {
        document.getElementById("quantityInput").value = parseInt(value) - 1;
      }
    }
  };

  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const addToCartDispatch = (i) => {
    const qauntity = document.getElementById("quantityInput").value;
    const isDuplicate = store.cart.find((c) => c.item.id === i.id);

    if (!isDuplicate && qauntity >= 1) {
      dispatch(addToCart(i, qauntity));
    } else {
      const msg = isDuplicate
        ? "ITEM HAS ALREADY BEEN ADDED!"
        : !qauntity
        ? "ENTER A VALID QUANTITY"
        : "";

      const type = isDuplicate ? "warn" : !qauntity ? "error" : "";
      dispatch(cartMsgUpdate(type, msg));
    }
  };

  return (
    <div className="container mt-5 flex-center-content">
      <div className="row">
        <div className="col">
          <div className="item-display flex-center-content">
            {item.msg && (
              <div
                className="topcorner"
                style={{
                  color: item.msg === "NEW" ? "#ffc0be" : "#83d082",
                }}
              >
                {item.msg}
              </div>
            )}
            <img
              className={`${item.color}`}
              src={getIcon(item.icon)}
              alt={item.name}
              width={item.displaySize[1] || "60%"}
              height={item.displaySize[0] || "60%"}
            ></img>
          </div>
        </div>

        <div className="col">
          <h3 className="mt-5">
            <u>
              {item.type !== "accessories" && capitalize(item.color)}{" "}
              {item.name}
            </u>
          </h3>
          <p id="sku">SKU: {item.id}</p>
          <p id="price">{item.price}</p>

          <div className="mt-5">
            <label>
              <p>Quantity:</p>
              <div className="quantity-input">
                <button className="minus" onClick={minus}>
                  -
                </button>
                <input
                  id="quantityInput"
                  type="text"
                  value="1"
                  onChange={() => {}}
                />
                <button className="plus" onClick={plus}>
                  +
                </button>
              </div>
            </label>
            <input
              className="mt-3 add-to-cart-btn btn btn-dark"
              type="submit"
              value="Add to Cart"
              onClick={() => addToCartDispatch(item)}
            />
          </div>
          {store.addToCartMsg && (
            <div
              className={`mt-3 ${
                store.addToCartMsg.type === "success"
                  ? "success-msg"
                  : store.addToCartMsg.type === "error"
                  ? "error-msg"
                  : "warn-msg"
              }`}
            >
              {store.addToCartMsg.msg}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Item;
