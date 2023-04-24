import { ADD_TO_CART, REMOVE_FROM_CART } from "./Constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [action.data, ...data];
    case REMOVE_FROM_CART:
      let remaining = data.filter((item) => item.id !== action.data);
      return [...remaining];
    default:
      return data;
  }
};
