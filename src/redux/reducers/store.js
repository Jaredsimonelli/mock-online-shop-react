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
  cartQuantity: 2,
  reviewData: {
    subtotal: 4,
    total: 9,
  },
  carouselIndex: 0,
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
        reviewData: {
          subtotal:
            state.reviewData.subtotal +
            currencyToNumber(action.payload.item.price) *
              parseInt(action.payload.quantity),
          total:
            state.reviewData.subtotal +
            currencyToNumber(action.payload.item.price) *
              parseInt(action.payload.quantity) +
            5,
        },
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
        cart: updateCart(
          state.cart,
          action.payload.item,
          action.payload.quantity
        ),
        cartQuantity: getCartQuantity(state.cart),
        reviewData: {
          subtotal: getSubtotal(
            updateCart(state.cart, action.payload.item, action.payload.quantity)
          ),
          total:
            getSubtotal(
              updateCart(
                state.cart,
                action.payload.item,
                action.payload.quantity
              )
            ) + 5,
        },
      };
    case "REMOVE FROM CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.item.id !== action.payload.item.id),
        cartQuantity: state.cartQuantity - action.payload.quantity,
        reviewData: {
          subtotal: getSubtotal(
            state.cart.filter((c) => c.item.id !== action.payload.item.id)
          ),
          total:
            getSubtotal(
              state.cart.filter((c) => c.item.id !== action.payload.item.id)
            ) + 5,
        },
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
    case "UPDATAE CAROUSEL INDEX":
      return {
        ...state,
        carouselIndex: action.index,
      };
    default:
      return state;
  }
};

const getCartQuantity = (cart) => {
  let quantity = 0;

  cart.every((c) => {
    quantity = quantity + c.quantity;
  });

  return quantity;
};

const updateCart = (cart, item, quantity) => {
  cart.forEach((c, i) => {
    if (c.item.id === item.id) {
      cart[i].quantity = quantity;
    }
  });

  return cart;
};

const getSubtotal = (cart) => {
  let subtotal = 0;
  cart.forEach((c) => {
    subtotal = subtotal + currencyToNumber(c.item.price) * parseInt(c.quantity);
  });
  return subtotal;
};

const currencyToNumber = (currency) => {
  return Number(currency.replace(/[^0-9.-]+/g, ""));
};

export default storeReducer;
