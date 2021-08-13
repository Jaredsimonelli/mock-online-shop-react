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

  return (
    <div>
      <h3 className="text-center mt-3">{item.name}</h3>
      <p>SKU: {item.id}</p>

      <div className="item-display">
        {/* TODO: add img sizing for item page and grid page */}
        <img
          className={`${item.color}`}
          style={{ marginTop: item.margin }}
          src={getIcon(item.icon)}
          alt={item.name}
          width={item.imgWidth || "225px"}
          height={item.imgHeight || "300px"}
        ></img>
      </div>
    </div>
  );
}

export default Item;
