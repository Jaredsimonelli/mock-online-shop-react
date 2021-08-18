import { shirtList, accessoriesList, pantsList } from "../../constants/consts";

const initialState = {
  allItems: shirtList.concat(accessoriesList, pantsList),
  selectedItem: {},
  shirts: shirtList,
  pants: pantsList,
  accessories: accessoriesList,
  cart: [],
  addToCartMsg: { type: "warn", msg: "" },
  cartQuantity: 0,
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET SELECT":
      return {
        ...state,
        selectedItem: action.payload,
      };
    case "ADD TO CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
        addToCartMsg: { type: "success", msg: "ITEM ADDED!" },
        cartQuantity: parseInt(
          state.cartQuantity + action.payload.quantity,
          10
        ),
      };
    case "CART MESSAGE UPDATE":
      return {
        ...state,
        addToCartMsg: { type: action.payload.type, msg: action.payload.msg },
      };
    case "RESET MESSAGE":
      return {
        ...state,
        addToCartMsg: { type: "", msg: "" },
      };
    case "UPDATE CART":
      return {
        ...state,
        cart: state.cart.filter((c) => {
          if (c.item.id === action.payload.item.id) {
            c.quantity = action.payload.quantity;
          }
        }),
      };
    case "REMOVE FROM CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.item.id !== action.payload.item.id),
      };
    case "GET ALL ITEMS":
      return {
        ...state,
        allItems: shirtList.concat(accessoriesList, pantsList),
      };
    case "GET SHIRTS":
      return {
        ...state,
        shirts: shirtList,
      };
    case "GET PANTS":
      return {
        ...state,
        pants: pantsList,
      };
    case "GET ACCESSORIES":
      return {
        ...state,
        accessories: accessoriesList,
      };
    default:
      return state;
  }
};

export default storeReducer;
