import { shirtList, accessoriesList, pantsList } from "../../constants/consts";

const initialState = {
  allItems: shirtList.concat(accessoriesList, pantsList),
  selectedItem: {},
  shirts: shirtList,
  pants: pantsList,
  accessories: accessoriesList,
  cart: [],
  addToCartMsg: "",
  cartQuantity: 0,
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET SELECT":
      return {
        ...state,
        selectedItem: action.payload,
      };
    // case "ADD TO CART":
    //   return {
    //     ...state,
    //     cart: [
    //       ...state.cart,
    //       { item: action.payload.item, quantity: action.payload.quantity },
    //     ],
    //   };
    case "ADD TO CART":
      return {
        ...state,
        cart: [...state.cart, action.payload.item],
        addToCartMsg: "ITEM ADDED!",
        cartQuantity: state.cartQuantity + action.payload.item.quantity,
      };
    case "DUPLICATE":
      return {
        ...state,
        addToCartMsg: "ITEM HAS ALREADY BEEN ADDED!",
      };
    case "RESET DUPLICATE":
      return {
        ...state,
        addToCartMsg: "",
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
