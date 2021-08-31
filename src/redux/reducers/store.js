import { shirtList, accessoriesList, pantsList } from "../../constants/consts";

const initialState = {
  allItems: shirtList.concat(accessoriesList, pantsList),
  selectedItem: {},
  shirts: shirtList,
  pants: pantsList,
  accessories: accessoriesList,
  cart: [
    {
      item: {
        id: "3001",
        name: "Socks",
        type: "accessories",
        color: "black",
        icon: "socks",
        margin: "50px",
        gridSize: ["190px", "190px"],
        displaySize: ["", ""],
        sizes: [],
        price: "$2.00",
        msg: "SALE",
      },
      quantity: 2,
    },
  ],
  addToCartMsg: { type: "warn", msg: "" },
  cartQuantity: 1,
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
          parseInt(state.cartQuantity) + parseInt(action.payload.quantity),
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
        cart: state.cart.every((c) => {
          if (c.item.id === action.payload.item.id) {
            // TODO: update not working
            console.log(c.item);
            console.log(action.payload);
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
