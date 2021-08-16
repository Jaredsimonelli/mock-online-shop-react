export const setSelectedItem = (item) => {
  return {
    type: "SET SELECT",
    payload: item,
  };
};

export const addToCart = (item, quantity) => {
  return {
    type: "ADD TO CART",
    payload: { item, quantity },
  };
};

export const updateCart = (item, quantity) => {
  return {
    type: "UPDATE CART",
    payload: { item, quantity },
  };
};

export const removeFromCart = (item) => {
  return {
    type: "REMOVE FROM CART",
    payload: item,
  };
};

export const getAllItems = () => {
  return {
    type: "GET ALL ITEMS",
  };
};

export const getShirts = () => {
  return {
    type: "GET SHIRTS",
  };
};

export const getPants = () => {
  return {
    type: "GET PANTS",
  };
};

export const getAccessories = () => {
  return {
    type: "GET ACCESSORIES",
  };
};
