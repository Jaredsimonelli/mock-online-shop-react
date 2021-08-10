import { Link } from "react-router-dom";

import tshirtIcon from "../icons/tshirt.png";
import dressShirtIcon from "../icons/dress-shirt.png";
import beltIcon from "../icons/belt.png";
import socksIcon from "../icons/socks.png";
import watchIcon from "../icons/watch.png";
import indianaJonesHateIcon from "../icons/indiana-jones.png";
import longPantsIcon from "../icons/pants-long.png";
import shortPantsIcon from "../icons/pants-short.png";
import joggersIcon from "../icons/joggers.png";

const Grid = ({ items, title }) => {
  const getIcon = (itemIcon) => {
    let icon;

    switch (itemIcon) {
      case "tshirt":
        icon = tshirtIcon;
        break;
      case "dressShirt":
        icon = dressShirtIcon;
        break;
      case "belt":
        icon = beltIcon;
        break;
      case "socks":
        icon = socksIcon;
        break;
      case "watch":
        icon = watchIcon;
        break;
      case "pants-long":
        icon = longPantsIcon;
        break;
      case "pants-short":
        icon = shortPantsIcon;
        break;
      case "joggers":
        icon = joggersIcon;
        break;
      case "indianajones":
        icon = indianaJonesHateIcon;
        break;
      default:
        icon = tshirtIcon;
    }
    return icon;
  };

  return (
    <div className="container">
      <h1 className="text-center mt-3">{title}</h1>

      <div className="grid">
        {items.map((item) => (
          <div className="box-wrapper" key={`${item.name} + ${item.color}`}>
            <div className="box">
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
              <Link to={`/${item.type}/${item.id}`}>
                <img
                  className={`icon ${item.color}`}
                  style={{ marginTop: item.margin }}
                  src={getIcon(item.icon)}
                  alt={item.name}
                  width={item.imgWidth || "256px"}
                  height={item.imgHeight || "256px"}
                ></img>
              </Link>
            </div>

            <div className="label">
              {item.name}: {item.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
