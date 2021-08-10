import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

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
    </div>
  );
}

export default Item;
