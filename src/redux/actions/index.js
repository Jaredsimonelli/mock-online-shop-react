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

export const removeFromCart = (item, quantity) => {
  return {
    type: "REMOVE FROM CART",
    payload: { item, quantity },
  };
};

export const updateCart = (item, quantity) => {
  return {
    type: "UPDATE CART",
    payload: { item, quantity },
  };
};

export const cartMsgUpdate = (type, msg) => {
  return {
    type: "CART MESSAGE UPDATE",
    payload: { type, msg },
  };
};

export const resetMsg = () => {
  return {
    type: "RESET MESSAGE",
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

export const updateCarouselIndex = (index) => {
  return {
    type: "UPDATAE CAROUSEL INDEX",
    payload: index,
  };
};
