import tshirtIcon from "../icons/tshirt.png";
import dressShirtIcon from "../icons/dress-shirt.png";
import beltIcon from "../icons/belt.png";
import socksIcon from "../icons/socks.png";
import watchIcon from "../icons/watch.png";
import indianaJonesHateIcon from "../icons/indiana-jones.png";
import longPantsIcon from "../icons/pants-long.png";
import shortPantsIcon from "../icons/pants-short.png";
import joggersIcon from "../icons/joggers.png";

export const getIcon = (itemIcon) => {
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
