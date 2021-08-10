export const setSelectedItem = (item) => {
  return {
    type: "SET SELECT",
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
