import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getIcon } from "../helpers/getIcon";

function Item() {
  const store = useSelector((state) => state.store);
  const { id } = useParams();
  const { itemType } = useParams();

  const item = store.allItems.find(
    (item) => item.id === id && item.type === itemType
  );

  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
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
              <input type="number" name="quantity" />
            </label>
            <input
              className="mt-3 add-to-cart-btn btn btn-dark"
              type="submit"
              value="Add to Cart"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
